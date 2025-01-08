<script setup lang="ts">
import { defineProps } from 'vue'

interface LabelProp {
  for?: string
}

const $props = withDefaults(defineProps<LabelProp>(), {
  for: String,
})
</script>

<template>
  <label class="mb-2 block" :for="$props.for"><slot></slot></label>
</template>

<style scoped></style>
