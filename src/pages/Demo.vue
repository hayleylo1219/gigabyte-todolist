<script setup lang="ts">

import { getCurrentInstance } from 'vue'
import { useLoadingStore } from '@/stores/useLoading'
const loadingStore = useLoadingStore()

const {
  proxy: { $authApi },
} = getCurrentInstance()

function runLoading() {
  loadingStore.setLoading(true)
  setTimeout(() => {
    loadingStore.setLoading(false)
  }, 3000)
}


// const callApi = async () => {
//   const res = await $authApi.get('/api/v1/auth')
//   console.log(res)
// }

</script>

<template>
  <div >
    <button @click="runLoading" class=" bg-primary text-white text-lg">run loading</button>
  </div>
</template>

<style scoped></style>
