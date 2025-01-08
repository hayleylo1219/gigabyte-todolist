<script setup lang="ts">
import { ref, watch } from 'vue'
import deleteSvg from '@/assets/icon-trash.svg?url'
import { useTodoItemStore } from '@/stores/useTodoItem'

const inputTitleRef = ref(null)
const isMobileMenuShow = ref<boolean>(false)

const todoItemStore = useTodoItemStore()

/**
 * 更新圖片方法
 * @param {string} url 圖片網址
 * @param {string} type 圖片類型 'imageUrl' | 'imageUploaded'
 **/
function upadteImage(url: string, type: 'imageUrl' | 'imageUploaded') {
  const { imageUrl, imageUploaded, ...rest } = todoItemStore.getActiveItem
  todoItemStore.updateTodoitem({
    ...rest,
    imageUrl: type === 'imageUrl' ? url : null,
    imageUploaded: type === 'imageUploaded' ? url : null,
  })
}

// 自行上傳圖片
function handleUploadedTodoImage(image: string) {
  upadteImage(image, 'imageUploaded')
}

// 打開手機選單
function openMobileMenu() {
  isMobileMenuShow.value = true
}

// 關閉手機選單
function closeMobileMenu() {
  isMobileMenuShow.value = false
}

// 結束日需大於開始日
const disabledEndDate = (date): boolean => {
  const startDate = new Date(todoItemStore.getActiveItem.startDate)
  startDate?.setHours(0, 0, 0, 0)
  return date <= startDate
}

// 開始日需小於結束日
const disabledStartDate = (date): boolean => {
  const endDate = new Date(todoItemStore.getActiveItem.endDate)
  endDate?.setHours(0, 0, 0, 0)
  return todoItemStore.getActiveItem.endDate ? date >= endDate : false
}

// 刪除代辦事項後, 回到第一個代辦事項
function handleDeleteItem() {
  todoItemStore.deleteTodoitem(todoItemStore.getActiveItem.uuid)
  const firstItem = todoItemStore.getTodoItems[0]
  todoItemStore.updateActiveItemUuid(firstItem.uuid)
}

// 監聽 activeItem 若變動, 聚焦標題 input
watch(
  () => todoItemStore.getActiveItem,
  val => {
    if (val) {
      inputTitleRef.value.focusInput()
    }
  },
  { immediate: false },
)

// 監聽貼圖片網址欄位若有值, 需清空上傳圖片
watch(
  () => todoItemStore.getActiveItem?.imageUrl,
  val => {
    if (val) {
      upadteImage(val, 'imageUrl')
    }
  },
  { immediate: true },
)

// 監聽上傳圖片欄位若有值, 需清空貼圖片網址
watch(
  () => todoItemStore.getActiveItem?.imageUploaded,
  val => {
    if (val) {
      upadteImage(val, 'imageUploaded')
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="container" :class="{ fixed: isMobileMenuShow }">
    <div class="flex min-h-screen max-w-[100vw]">
      <Sidebar @close-mobile-menu="closeMobileMenu" :isMobileMenuShow="isMobileMenuShow" />
      <div class="h-full flex-1 bg-white p-5">
        <!-- mask -->
        <div
          @click="closeMobileMenu"
          :class="isMobileMenuShow ? 'block' : 'hidden'"
          class="absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full bg-black opacity-30 md:hidden"
        ></div>
        <div class="mb-3 flex items-center justify-between md:justify-end">
          <button @click="openMobileMenu" class="flex flex-col items-center justify-center space-y-[4px] md:hidden">
            <span class="h-[5px] w-[24px] bg-black"></span>
            <span class="h-[5px] w-[24px] bg-black"></span>
            <span class="h-[5px] w-[24px] bg-black"></span>
          </button>
          <div @click="handleDeleteItem" class="inline-block cursor-pointer py-3">
            <img :src="deleteSvg" alt="delete" />
          </div>
        </div>
        <div class="grid grid-cols-12 items-end gap-x-6 gap-y-4">
          <div class="col-span-12 md:col-span-7">
            <FormLabel :for="'title'">Title</FormLabel>
            <InputPrimary
              v-model:text="todoItemStore.getActiveItem.title"
              ref="inputTitleRef"
              :name="'title'"
              :placeholder="'title'"
            />
          </div>
          <div class="col-span-12 md:col-span-5">
            <FormLabel :for="'Title'">Date</FormLabel>
            <div class="flex">
              <date-picker
                v-model:value="todoItemStore.getActiveItem.startDate"
                :disabled-date="disabledStartDate"
                class="flex-1"
                format="YYYY/MM/DD"
                placeholder="YYYY/MM/DD"
                allow-clear
              />
              <div class="flex h-[51px] w-[36px] items-center justify-center">
                <span class="items-center">~</span>
              </div>
              <date-picker
                v-model:value="todoItemStore.getActiveItem.endDate"
                :disabled-date="disabledEndDate"
                class="flex-1"
                format="YYYY/MM/DD"
                placeholder="YYYY/MM/DD"
                allow-clear
              />
            </div>
          </div>
          <div class="col-span-12 md:col-span-7">
            <FormLabel :for="'image'">Image</FormLabel>
            <ButtonUpload :text="'Upload Image'" @image-selected="handleUploadedTodoImage" />
            <div class="py-[12px] text-center">or</div>
            <InputPrimary v-model:text="todoItemStore.getActiveItem.imageUrl" :placeholder="'請輸入圖片網址'" />
          </div>
          <div class="col-span-12 md:col-span-5">
            <div
              class="h-[150px] w-full rounded-[10px] bg-neutral bg-cover bg-center"
              :style="{
                backgroundImage: `url(${todoItemStore.getActiveItem.imageUrl || todoItemStore.getActiveItem.imageUploaded || 'none'})`,
              }"
            ></div>
          </div>
          <div class="col-span-12 md:col-span-12">
            <FormLabel :for="'content'">Content</FormLabel>
            <TextareaPrimary
              v-model:text="todoItemStore.getActiveItem.content"
              :name="'content'"
              :placeholder="'Content...'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
