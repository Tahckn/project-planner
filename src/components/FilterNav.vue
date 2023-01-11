<template>
  <nav class="text-center">
    <button
      class="bg-items px-3 py-1 rounded-md border-none text-text outline-none text-sm uppercase mr-2.5 tracking-wide font-bold cursor-pointer"
      @click="updateFilter('all')"
      :class="{ 'text-completed': props.current === 'all' }"
    >
      View All
    </button>
    <button
      class="bg-items px-3 py-1 rounded-md border-none text-text outline-none text-sm uppercase mr-2.5 tracking-wide font-bold cursor-pointer"
      @click="updateFilter('completed')"
      :class="{ 'text-completed': props.current === 'completed' }"
    >
      Completed
    </button>
    <button
      class="bg-items px-3 py-1 rounded-md border-none text-text outline-none text-sm uppercase mr-2.5 tracking-wide font-bold cursor-pointer"
      @click="updateFilter('ongoing')"
      :class="{ 'text-completed': props.current === 'ongoing' }"
    >
      Ongoing
    </button>
  </nav>
</template>

<script setup>
import { defineEmits } from 'vue'

const props = defineProps(['current'])

const emit = defineEmits(['filterChanged'])

const updateFilter = (by) => {
  emit('filterChanged', by)
}
</script>
