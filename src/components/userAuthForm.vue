<script>
import useVuelidate from '@vuelidate/core'
import { email, minLength, required } from '@vuelidate/validators'

export default {
  props: [
    'buttonText',
    'submitForm',
  ],
  setup() {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      form: {
        email: '',
        password: '',
        name: '',
      },
    }
  },

  validations() {
    return {
      form: {
        name: {
          required,
        },
        email: {
          required, email,
        },
        password: {
          required,
          min: minLength(6),
        },
      },
    }
  },
  methods: {
    async submitFormWithCheck() {
      const isFormCorrect = await this.v$.$validate()
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect)
        return

      this.submitForm(this.v$.form.$model)
      // actually submit form
    },
  },
}
</script>

<template>
  <form class="flex flex-col gap-5 text-zinc-100" @submit.prevent="submitFormWithCheck">
    <div class="flex flex-col">
      Name
      <input
        v-model="v$.form.name.$model"
        class="rounded form-input bg-zinc-600 "
        label="Name"
      >
      <div v-for="(error, index) of v$.form.name.$errors" :key="index" class="input-errors">
        <div class="error-msg text-rose-300 text-sm">
          {{ error.$message }}
        </div>
      </div>
    </div>

    <div class="flex flex-col">
      Email
      <input
        v-model="v$.form.email.$model"
        class="rounded form-input bg-zinc-600 "
        label="Email"
      >
      <div v-for="(error, index) of v$.form.email.$errors" :key="index" class="input-errors">
        <div class="error-msg text-rose-300 text-sm">
          {{ error.$message }}
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      Password
      <input
        v-model="v$.form.password.$model"
        class="rounded form-input bg-zinc-600 "
        label="Password"
        type="password"
      >
      <div v-for="(error, index) of v$.form.password.$errors" :key="index" class="input-errors">
        <div class="error-msg text-rose-300 text-sm">
          {{ error.$message }}
        </div>
      </div>
    </div>

    <button :disabled="v$.form.$invalid" class="rounded form-input bg-blue-800 w-1/2">
      {{ buttonText }}
    </button>
  </form>
</template>
