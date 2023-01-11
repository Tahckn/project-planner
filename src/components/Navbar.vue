<template>
  <nav class="text-center my-8 mx-auto bg-items p-3 rounded-lg w-[80%]">
    <RouterLink
      class="inline-block my-0 mx-3 text-text bg-backdrop py-1 px-4 rounded shadow-3xl shadow-inner"
      to="/"
      >Projects</RouterLink
    >
    <RouterLink
      class="inline-block my-0 mx-3 text-text bg-backdrop py-1 px-4 rounded shadow-3xl shadow-inner"
      to="add"
      >Add a new Project</RouterLink
    >
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
