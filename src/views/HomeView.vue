<template>
  <div>
    <FilterNav :current="data.current" @filterChanged="data.current = $event" />
    <div v-if="data.projects.length">
      <div
        v-for="project in filteredProjects.slice().reverse()"
        :key="project.id"
      >
        <SingleProject
          :project="project"
          @deleted="handleDelete"
          @completed="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive } from 'vue'
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'

const data = reactive({
  projects: [],
  current: 'all',
})

// Fetching data onMount

onMounted(() => {
  fetch('http://localhost:3000/projects')
    .then((res) => res.json())
    .then((resJson) => (data.projects = resJson))
    .catch((err) => console.log(err))
})

// Deleting data synch with the component

const handleDelete = (id) => {
  data.projects = data.projects.filter((project) => {
    return project.id !== id
  })
}

// Toggle project synch with the component

const handleComplete = (id) => {
  let a = data.projects.find((project) => {
    return project.id === id
  })
  a.complete = !a.complete
}

const filteredProjects = computed(() => {
  if (data.current === 'completed') {
    return data.projects.filter((project) => project.complete)
  }
  if (data.current === 'ongoing') {
    return data.projects.filter((project) => !project.complete)
  }
  return data.projects
})
</script>
