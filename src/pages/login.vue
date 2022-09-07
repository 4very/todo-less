<script setup>
import { mainStore } from '../store/main'
import UserLoginForm from '@/components/UserLoginForm'

const main = mainStore()

async function loginUser(form) {
  await this.$auth.loginWith('local', { body: { ...form } })
  await this.$auth.fetchUser()
  main.$patch({
    usrData: this.$auth.user,
    token: this.$auth.strategy.token.get(),
  })
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

