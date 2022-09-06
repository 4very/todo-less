<script>
import UserLoginForm from '@/components/UserLoginForm'

export default {
  components: {
    UserLoginForm,
  },
  methods: {
    loginUser(form) {
      this.$auth.loginWith('local', { body: { ...form } })
    },
  },
}
</script>

<template>
  <div class="flex w-screen h-screen justify-center">
    <div class="pt-10 flex flex-col w-1/3 place-self-center">
      <h1 class="text-lg pb-2 text-zinc-100 text-center">
        Login
      </h1>

      <UserLoginForm button-text="Login" :submit-form="loginUser" />
    </div>
  </div>
</template>

