<script setup>
import { defineProps } from 'vue'

defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
    validator: (val) => {
      return [
        'text',
        'textarea',
        'tel',
        'email',
        'search',
        'password',
      ].includes(val)
    },
  },
})
</script>

<template>
  <div>
    <input
      v-if="type !== 'textarea'"
      :type="type"
      :placeholder="placeholder"
      class="form-control mb-3"
    />

    <textarea
      v-else
      rows="3"
      class="form-control mb-3"
      placeholder="Что понравилось, а что нет"
    ></textarea>
  </div>
</template>
