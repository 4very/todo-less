<script setup>
import { mainStore } from '~/store/main'

const main = mainStore()
</script>

<script>
function logout(context, main) {
  context.$auth.logout()
  main.$reset()
}

// if (this.$auth.loggedIn && main.usrData.keys().length === 0) {
//   main.$patch({
//     usrData: this.$auth.user,
//     token: this.$auth.strategy.token.get(),
//   })
// }
</script>

<template>
  <div>
    <nav class="relative w-full flex flex-wrap items-center justify-between py-3 bg-green-900 text-gray-200 shadow-lg">
      <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div class="container-fluid">
          <NuxtLink class="text-xl hover:underline" href="/">
            Todo-Less
          </NuxtLink>
        </div>
        <div class="container-fluid flex gap-4">
          <NuxtLink v-if="!$auth.loggedIn" class="text-lg hover:underline" href="/login">
            Login
          </NuxtLink>
          <NuxtLink v-if="!$auth.loggedIn" class="text-lg hover:underline" href="/Register">
            Register
          </NuxtLink>
          <div v-if="$auth.loggedIn" class="text-lg">
            Hello, {{ main.usrData.name }}!
          </div>
          <NuxtLink v-if="$auth.loggedIn" class="text-lg hover:underline" @click="logout(this, main)">
            Sign Out
          </NuxtLink>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>
