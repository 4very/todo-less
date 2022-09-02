<script setup>
function login() {
  $fetch('/api/login', { method: 'POST', body: { username: 'username', password: 'password' } })
}
</script>

<template>
  <div>
    hello
    <a @click="$auth.logout()">Sign Off</a>
    <a @click="$auth.loginWith('local', { data: {} })">Sign In</a>
    <div v-if="$auth.loggedIn">
      logged in!
    </div>
    <div>
      {{ $auth.user?.data }}
    </div>
  </div>
</template>
