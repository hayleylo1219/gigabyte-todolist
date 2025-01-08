<script setup lang="ts">
import { useTodoItemStore } from '@/stores/useTodoItem'

const $props = defineProps<{
  title: string
  uuid: string
}>()
const todoItemStore = useTodoItemStore()

// 點擊代辦事項, 更新 activeItem uuid
function handleActiveItem() {
  todoItemStore.updateActiveItemUuid($props.uuid)
}
</script>

<template>
  <li
    @click="handleActiveItem"
    class="bg-primary-dark hover:before:triangle relative mb-2 h-[48px] cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-nowrap p-3 before:absolute before:right-0 before:top-0 last:mb-0 hover:font-bold"
    :class="{ 'todo-item-active': todoItemStore.getActiveItem.uuid === $props.uuid }"
  >
    {{ $props.title }}
  </li>
</template>

<style scoped>
.todo-item-active {
  @apply before:triangle font-bold;
}
</style>
