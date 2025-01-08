<script setup lang="ts">
import { defineProps } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { useLoadingStore } from '@/stores/useLoading'
import { useTodoItemStore } from '@/stores/useTodoItem'
import { getRadomImageApi } from '@plugins/api'
import { preloadImage } from '@plugins/utils/imageHandler'

const $props = defineProps<{
  isMobileMenuShow: boolean
}>()
const $emit = defineEmits(['close-mobile-menu'])

const todoItemStore = useTodoItemStore()
const loadingStore = useLoadingStore()

// 新增待辦事項
function handleAddItem() {
  const uuid: string = uuidv4()
  todoItemStore.addTodoitem({
    uuid,
    title: '',
    imageUrl: null,
    imageUploaded: null,
    content: null,
    startDate: null,
    endDate: null,
  })
  todoItemStore.updateActiveItemUuid(uuid)
}

// 產生隨機圖片
function handleRadomImage() {
  loadingStore.setLoading(true)
  getRadomImageApi().then(res => {
    const { imageUrl, imageUploaded, ...rest } = todoItemStore.getActiveItem
    todoItemStore.updateTodoitem({
      ...rest,
      imageUrl: res,
      imageUploaded: null,
    })

    // 顯示後關閉 loading
    preloadImage(res)
      .then(() => {
        loadingStore.setLoading(false)
      })
      .catch(() => {
        loadingStore.setLoading(false)
      })
  })
}

// 關閉手機版選單
function closeMobileMenu() {
  $emit('close-mobile-menu', false)
}
</script>

<template>
  <div
    :class="$props.isMobileMenuShow ? 'translate-x-0' : 'translate-x-[-250px]'"
    class="fixed left-0 top-0 z-50 h-screen w-[250px] bg-primary p-5 duration-300 ease-in-out md:relative md:col-span-5 md:translate-x-0"
  >
    <div class="relative h-full">
      <button @click="closeMobileMenu" class="absolute right-0 top-[-3px] h-[24px] w-[24px] md:hidden">
        <span
          class="absolute left-1/2 top-1/2 h-1 w-full -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-black"
        ></span>
        <span
          class="absolute left-1/2 top-1/2 h-1 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 transform bg-black"
        ></span>
      </button>
      <h1 class="text-base font-bold">Demo Todo List</h1>
      <div class="mx-[-20px] max-h-[calc(100%-150px)] overflow-y-auto overflow-x-hidden">
        <ul class="mt-5 list-inside list-decimal">
          <SidebarTodoItem
            v-for="item in todoItemStore.getTodoItems"
            :title="item.title"
            :uuid="item.uuid"
            :key="item.uuid"
          />
        </ul>
      </div>
      <ButtonPrimary class="mt-5" :disabled="todoItemStore.getTodoItems.length >= 10" @click.prevent="handleAddItem"
        >Add Item</ButtonPrimary
      >
      <!-- 點擊打隨機圖床 -->
      <div
        @click="handleRadomImage"
        class="absolute bottom-0 left-0 h-[60px] w-full cursor-pointer rounded-[10px] bg-neutral bg-cover bg-center"
        :style="{
          backgroundImage: `url(${todoItemStore.getActiveItem.imageUrl || 'none'})`,
        }"
      ></div>
    </div>
  </div>
</template>

<style scoped></style>
