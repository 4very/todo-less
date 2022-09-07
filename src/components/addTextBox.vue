<script setup>
import { Field, useForm } from 'vee-validate'
import { mainStore } from '~/store/main'

const main = mainStore()

const initialValues = {
  todo: '',
}

const { handleSubmit } = useForm({ initialValues })

const open = ref(false)

const onSubmit = handleSubmit(async (values) => {
  const newData = await $fetch('/api/todo/create', { method: 'post', body: { text: values.todo, token: main.token } })
  main.$patch({ usrData: newData })
  open.value = false
  resetField()
})
</script>

<template>
  <div class="flex flex-row justify-center items-center gap-4">
    <button @click="open = !open">
      <IconPlus
        class="h-8 w-8"
      />
    </button>
    <form
      class="flex flex-row gap-2" :class="{
        invisible:
          !open,
      }" @submit="onSubmit"
    >
      <Field
        name="todo"

        type="text" class="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-white-200
        bg-zinc-700 bg-clip-padding
        border border-solid border-gray-600
        rounded
        transition
        ease-in-out
        m-0"
      />
      <!-- <button :disabled="v$.form.$invalid"> -->
      <button>
        <IconSend
          class="h-8 w-8"
        />
      </button>
    </form>
  </div>
</template>
