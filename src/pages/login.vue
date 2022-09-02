<script>
import UserAuthForm from '@/components/UserAuthForm'

export default {
  components: {
    UserAuthForm,
  },
  methods: {
    loginUser(form) {
      console.log(form)
      this.$auth.loginWith('local', { body: { ...form } }).then(res => console.log(res))
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

      <UserAuthForm button-text="Login" :submit-form="loginUser" has-name="true" />
    </div>
  </div>
</template>

