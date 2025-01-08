<script setup lang="ts">
const $emit = defineEmits(['image-selected'])

interface InputUploadProp {
  text: string
}

const $props = withDefaults(defineProps<InputUploadProp>(), {
  text: 'Upload',
})

function onFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = e => {
      // 將圖片的 Base64 URL 發送給父元件
      $emit('image-selected', e.target.result)
    }
    reader.readAsDataURL(file)
  }
  input.value = ''
}
</script>

<template>
  <div class="flex flex-col items-center space-y-4">
    <!-- 上傳按鈕 -->
    <label
      for="image-upload"
      class="text-lg font-base hover:bg-primary-dark flex h-[55px] w-full max-w-full cursor-pointer items-center justify-center rounded-[10px] bg-primary-light text-center leading-none text-black outline-none duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-primary-light disabled:text-neutral"
    >
      {{ $props.text }}
    </label>
    <!-- 隱藏的 input -->
    <input id="image-upload" type="file" accept="image/*" class="hidden" @change="onFileChange" />
  </div>
</template>

<style scoped></style>
