<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface TextareaProp {
  placeholder?: string
  name?: string
  text: string | null
}

const $props = withDefaults(defineProps<TextareaProp>(), {
  placeholder: '請輸入',
})

const $emit = defineEmits(['update:text'])

// 雙向綁定 更新textarea資料
function onTextareaUpdate(event: Event) {
  const target = event.target as HTMLInputElement
  $emit('update:text', target.value)
}
</script>

<template>
  <div class="relative overflow-hidden rounded-[10px]">
    <textarea
      :value="$props.text"
      :name="$props.name"
      maxlength="200"
      class="h-[145px] w-full rounded-[10px] bg-neutral p-5 outline-none"
      :placeholder="$props.placeholder"
      @input="onTextareaUpdate"
      type="text"
    />
    <!-- 右下角標籤 -->
    <div
      class="absolute bottom-0 right-0 flex h-[43px] w-[90px] items-center bg-primary-light px-5 text-center text-sm"
    >
      200/{{ $props.text?.length || '0' }}
    </div>
    <div
      class="absolute bottom-[2px] right-[90px] h-0 w-0 border-b-[43px] border-l-[43px] border-transparent border-b-primary-light"
    ></div>
  </div>
</template>

<style scoped></style>
