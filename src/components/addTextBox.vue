<script setup>
import { Field, useForm } from 'vee-validate'

const props = defineProps([
  'token',
])

const initialValues = {
  todo: '',
}

const { handleSubmit } = useForm({ initialValues })

const onSubmit = handleSubmit((values) => {
  // alert(JSON.stringify(values, null, 2))
  $fetch('/api/todo/create', { method: 'post', body: { text: values.todo, token: props.token } })
})

// async function submitFormWithCheck() {
//   // this.submitForm(this.v$.form.$model)
//   console.log(this.v$)

//   // $fetch('/api/todo/create', { method: 'post', body: { ...this.v$.form.$model } })
//   // actually submit form
// }

const open = ref(false)
</script>

<!-- <script>
export default {

  validations() {
    return {

      todo: {
        required,
      },
    }
  },
  methods: {

  },
}
</script> -->

<template>
  <div class="flex flex-row justify-center items-center gap-4">
    <button @click="open = !open">
      <IconPlus
        class="h-8 w-8"
      />
    </button>
    <Form
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
    </Form>
  </div>
</template>
