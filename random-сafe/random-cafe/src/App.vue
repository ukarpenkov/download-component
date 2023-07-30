<script setup>
import { computed, reactive, ref } from 'vue'

const review = reactive({
  author: '',
  stars: null,
  text: '',
  photos: [],
  isRecomended: true,
})

const stars = [1, 2, 3, 4, 5]

const submit = () => {
  console.log('sub!')
}
</script>

<template>
  <form @submit.prevent.stop="submit" class="container pt-5 pb-5">
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
      <input class="form-check-input" type="checkbox" :id="`star${star}`" />
      <label class="form-check-label" :for="`star${star}`">
        {{ star }}
      </label>
    </div>

    <div class="mt-3 mb-5">
      <label class="form-label">Фото</label>
      <input class="form-control" type="file" />
    </div>

    <div class="form-check">
      <input class="form-check-input" type="radio" id="adv1" />
      <label class="form-check-label" for="adv1"> Не советую </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" id="adv2" checked />
      <label class="form-check-label" for="adv2"> Советую </label>
    </div>

    <button class="btn btn-primary mt-5">Отправить</button>
  </form>
</template>
