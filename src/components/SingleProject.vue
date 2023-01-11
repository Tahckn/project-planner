<template>
  <div
    class="transition-colors delay-40 my-5 mx-auto py-4 px-5 rounded bg-items border-l-4 drop-shadow-xl"
    :class="props.project.complete ? 'border-completed' : 'border-ongoing'"
  >
    <!-- title -->

    <div class="flex justify-between items-center">
      <h3 @click="data.showDetails = !data.showDetails" class="cursor-pointer">
        {{ props.project.title }}
      </h3>

      <!-- check icon -->
      <div class="space-x-3 flex items-center justify-center flex-shrink-0">
        <fa
          @click="toggleComplete"
          class="transition-colors delay-40 text-lg text-button hover:text-hover"
          :class="
            props.project.complete && 'text-completed hover:text-completedHover'
          "
          icon="check"
        ></fa>

        <!-- edit icon -->
        <RouterLink
          :to="{ name: 'EditProject', params: { id: props.project.id } }"
        >
          <fa
            class="transition-colors delay-40 text- text-button hover:text-hover"
            icon="pen"
          ></fa>
        </RouterLink>

        <!-- delete icon -->

        <fa
          @click="deleteData"
          class="transition-colors delay-40 text- text-button hover:text-delete"
          icon="trash"
        ></fa>
      </div>
    </div>

    <!-- details -->

    <Transition name="slide">
      <div
        class="mt-3 border-t-[1px] border-button border-opacity-30"
        v-if="data.showDetails"
      >
        <div class="mt-2" />
        {{ props.project.details }}
      </div>
      <div v-else></div>
    </Transition>
  </div>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'
import { RouterLink } from 'vue-router'

const emit = defineEmits(['deleted', 'completed'])

const data = reactive({
  showDetails: false,
  uri: 'http://localhost:3000/projects/' + props.project.id,
})

const deleteData = () => {
  fetch(data.uri, { method: 'DELETE' })
    .then(() => emit('deleted', props.project.id))
    .catch((err) => console.log(err))
}

const toggleComplete = () => {
  fetch(data.uri, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ complete: !props.project.complete }),
  })
    .then(() => emit('completed', props.project.id))
    .catch((err) => console.log(err))
}

const props = defineProps({
  project: Object,
})
</script>

<style>
.slide-enter-active {
  transition: all 0.2s ease-out;
}

.slide-leave-active {
  transition: all 0.1s cubic-bezier(0.42, 0, 0.58, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
