<script setup>
// const data = this.$auth.user.data
</script>

<template>
  <div class="h-screen w-scren flex justify-center mt-20 text-zinc-200">
    <div v-if="$auth.loggedIn" class="flex flex-col gap-5 items-center">
      <div v-if="$auth.user?.todos === {}" class="text-4xl text-center">
        No todos yet :(
      </div>
      <div class="w-1/3 text-lg flex-col flex gap-1">
        <div v-for="(item, i) in $auth.user.todos" :key="i">
          <input id="flexCheckDefault" class="form-check-input appearance-none h-5 w-5 border border-zinc-500 rounded-sm bg-zinc-700 checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="">
          <label class="form-check-label inline-block" for="flexCheckDefault">
            {{ item.text }}
          </label>
        </div>
      </div>
      <div>
        <AddTextBox :token="$auth.strategy.token.get()" />
      </div>
      <div>
        {{ $auth.user }}
      </div>
    </div>
  </div>
</template>
