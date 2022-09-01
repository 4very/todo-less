<script setup>
function login() {
  $auth.loginWith('auth0', { data: { client_id: 'wX7LhUAK99K4XYmOPym0PPjwJvEJ0qmj' } })
}
</script>

<template>
  <div>
    hello
    <a v-if="$auth.loggedIn" @click="$auth.logout()">Sign Off</a>
    <a v-else @click="$auth.loginWith('auth0', { client_id: 'wX7LhUAK99K4XYmOPym0PPjwJvEJ0qmj' })">Sign In</a>
  </div>
</template>
