<script setup lang="ts"></script>

<template>
  <button
    class="text-lg font-base hover:bg-primary-dark h-[44px] w-full max-w-full rounded-[10px] bg-primary-light leading-none text-black outline-none duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-primary-light disabled:text-neutral"
  >
    <slot></slot>
  </button>
</template>

<style scoped></style>
