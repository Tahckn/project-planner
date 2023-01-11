<template>
  <form
    @submit.prevent="handleUpdate"
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
      class="block mt-5 mx-auto mb-0 bg-formButton hover:bg-completed text-text p-2 rounded-md text-md"
    >
      Update Project
    </button>
  </form>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import router from '../router'

const props = defineProps({
  id: String,
})

// fetching the data that is going to be edited

onMounted(() => {
  {
    fetch(data.uri)
      .then((res) => res.json())
      .then((info) => {
        data.title = info.title
        data.details = info.details
      })
  }
})

const data = reactive({
  title: '',
  details: '',
  uri: 'http://localhost:3000/projects/' + props.id,
})

const handleUpdate = () => {
  fetch(data.uri, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: data.title,
      details: data.details,
    }),
  })
    .then(() => router.push('/'))
    .catch((err) => console.log(err))
}
</script>
