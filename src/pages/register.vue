<script>
import UserAuthForm from '@/components/UserAuthForm'

export default {
  components: {
    UserAuthForm,
  },
  methods: {
    registerUser(form) {
      $fetch('/api/auth/register', { method: 'post', body: { ...form } })
    },
  },
}
</script>

<template>
  <div class="flex w-screen h-screen justify-center">
    <div class="pt-10 flex flex-col w-1/3 place-self-center">
      <h1 class="text-lg pb-2 text-zinc-100 text-center">
        Register
      </h1>

      <UserAuthForm button-text="Register" :submit-form="registerUser" has-name="true" />
    </div>
  </div>
</template>
