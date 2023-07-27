<script setup>
import { computed, ref } from 'vue'

const products = ref([
  { tite: 'Банан', price: 20 },
  { tite: 'яб', price: 200 },
  { tite: 'груша', price: 2 },
  { tite: 'сникерс', price: 500 },
])

const query = ref('')

const queryProducts = computed(() => {
  let p = products.value
  let search = query.value
  if (search) {
    p = p.filter((product) => {
      return product.tite.indexOf(search) !== -1 || product.price <= search
    })
  }
  return p
})
</script>

<template>
  <div>
    <input type="search" placeholder="поиск продуктов" v-model="query" />
    <br />
    <br />

    <ul>
      <li v-for="product in queryProducts" :key="product">
        {{ product.tite }}-
        <sup>{{ product.price.toLocaleString() }}руб</sup>
      </li>
    </ul>
  </div>
</template>
