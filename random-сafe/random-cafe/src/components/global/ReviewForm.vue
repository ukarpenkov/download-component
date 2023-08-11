<script>
import { computed, reactive, defineComponent } from 'vue'
import UButton from './UButton.vue'
import UFile from './UFile.vue'
import axios from 'axios'

export default defineComponent({
  name: 'ReviewForm',

  components: {
    UButton,
    UFile,
  },

  setup() {
    const review = reactive({
      author: '',
      stars: null,
      text: '',
      photo: null,
      isRecomended: true,
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
    return {
      review,
      submit,
      stars,
    }
  },
})
</script>

<template>
  <form @submit.prevent.stop="submit" class="container pt-5 pb-5">
    <Uinput v-model="review.author" placeholder="Ваше имя" />
    <Uinput
      v-model="review.text"
      type="textarea"
      placeholder="Что понравилось, а что нет"
    />

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

    <UFile v-model="review.photo" label="Фото" />

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

    <UButton>Отправить</UButton>
  </form>
</template>
