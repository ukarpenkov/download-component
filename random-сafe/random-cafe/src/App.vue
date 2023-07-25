<script setup>
import { ref } from 'vue'

const users = ref([
  { id: 1, name: 'ura', age: 24 },
  { id: 2, name: 'lera', age: 20 },
  { id: 3, name: 'tor', age: 45 },
  { id: 4, name: 'tor', age: 54 },
])
</script>

<template>
  <div>
    <ul>
      <li v-for="user in users" :key="users.id">
        {{ user.name }}

        <sup :class="{ red: user.age > 24 }">{{ user.age }}</sup>
      </li>
    </ul>
  </div>
</template>

<style>
.red {
  color: red;
}
</style>
