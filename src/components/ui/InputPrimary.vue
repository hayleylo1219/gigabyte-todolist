<script setup lang="ts">
import { ref } from 'vue'

interface InputProp {
  placeholder?: string
  name?: string
  text: string | null
}

const $props = withDefaults(defineProps<InputProp>(), {
  placeholder: '請輸入',
})

const $emit = defineEmits(['update:text'])
const inputElement = ref<HTMLInputElement | null>(null)

// 雙向綁定 更新input資料
function onInputUpdate(event: Event) {
  const target = event.target as HTMLInputElement
  $emit('update:text', target.value)
}

// 聚焦內部input方法
const focusInput = () => {
  inputElement.value?.focus()
}

defineExpose({
  focusInput,
})
</script>

<template>
  <input
    ref="inputElement"
    :value="$props.text"
    :name="$props.name"
    class="h-[51px] w-full rounded-[10px] bg-neutral px-5 outline-none"
    :placeholder="$props.placeholder"
    @input="onInputUpdate"
    type="text"
  />
</template>

<style scoped></style>
