<template>
  <form
    @submit.prevent="handleSubmit"
    class="bg-items my-5 p-5 rounded-lg drop-shadow-xl"
  >
    <label for="title" class="labelStyle">Title :</label>
    <input
      type="text"
      class="inputStyle"
      v-model="data.title"
      id="title"
      required
    />

    <label class="labelStyle" for="details">Details :</label>
    <textarea
      class="h-[100px] w-[100%] box-border whitespace-pre-line inputStyle"
      type="text"
      v-model="data.details"
      id="details"
      required
    />

    <button
      class="transition-all active:scale-[0.98] delay-10 hover:scale-[1.02] block mt-5 mx-auto mb-0 bg-formButton hover:bg-completed text-text p-2 rounded-md text-md"
    >
      Add Project
    </button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import router from '../router'

const data = reactive({
  title: '',
  details: '',
})

const handleSubmit = () => {
  let project = {
    title: data.title,
    details: data.details,
    complete: false,
  }
  fetch('http://localhost:3000/projects', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project),
  })
    .then(() => {
      router.push('/')
    })
    .catch((err) => console.log(err))
}
</script>
