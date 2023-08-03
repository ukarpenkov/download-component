<script setup>
import { computed, reactive, ref } from 'vue'

import axios from 'axios'

const review = reactive({
  author: '',
  stars: null,
  text: '',
  photo: null,
  isRecomended: true,
})

const previewFilePath = computed(() => {
  if (review.photo) {
    return URL.createObjectURL(review.photo)
  }

  return '#'
})

const stars = [1, 2, 3, 4, 5]

const submit = () => {
  console.log('sub!')

  axios
    .post('/api/review', review, {
      headers: {
        'Content-Type': 'multipart/from-data',
      },
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      console.log('end')
    })
}

const uploadFile = (e) => {
  const [file] = e.target.files
  review.photo = file
}
</script>

<template>
  <form @submit.prevent.stop="submit" class="container pt-5 pb-5">
    <Uinput />
    <input
      type="text"
      v-model="review.author"
      placeholder="Ваше имя"
      class="form-control mb-3"
    />

    <textarea
      rows="3"
      class="form-control mb-3"
      v-model="review.text"
      placeholder="Что понравилось, а что нет"
    ></textarea>

    <h4>Оценка</h4>
    <div v-for="star in stars" :key="star" class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="review.stars"
        :value="star"
        :true-value="star"
        :false-value="null"
        :id="`star${star}`"
      />
      <label class="form-check-label" :for="`star${star}`">
        {{ star }}
      </label>
    </div>

    <div class="mt-3 mb-5">
      <label class="form-label">Фото</label>
      <input class="form-control" type="file" @change="uploadFile" />

      <img :src="previewFilePath" alt="" class="w-50 h-50 mt-5" />
    </div>

    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="adv1"
        v-model="review.isRecomended"
        :value="true"
      />
      <label class="form-check-label" for="adv1"> Не советую </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        id="adv2"
        v-model="review.isRecomended"
        :value="false"
      />
      <label class="form-check-label" for="adv2"> Советую </label>
    </div>

    <button class="btn btn-primary mt-5">Отправить</button>
  </form>
</template>
