<template>
  <div>
    <div class="w-[800px] h-[400px] shadow-2xl block relative">
      <div
        class="object-cover w-1/2 h-full flex justify-center items-center absolute"
      >
        <img
          class="block h-28"
          src="../assets/img/wisk-logo-black.png"
          alt="image"
        />
      </div>
      <form class="p-10 w-1/2 block absolute top-0 right-0">
        <p class="font-semibold text-lg mb-7">Login</p>
        <input
          class="border-b-[1px] mb-8 w-full h-10 outline-none border-b-slate-500"
          placeholder="Username"
          id="username"
          v-model="username"
        />
        <input
          type="password"
          class="border-b-[1px] mb-8 w-full h-10 outline-none border-b-slate-500"
          placeholder="Password"
          id="password"
          v-model="password"
        />

        <div class="flex mb-8">
          <input class="w-5 h-5" type="checkbox" v-model="rememberMe" />
          <div class="ml-3 opacity-70">Remember me</div>
        </div>
        <button
          class="px-7 text-white drop-shadow-md py-2 bg-green-600 rounded"
          @click="handleLogin($event)"
        >
          LOGIN
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  let rememberMe = ref(false)
  let username = ref('')
  let password = ref('')

  function handleLogin(event) {
    event.preventDefault()
    alert(username.value + ' ' + password.value + ' ' + rememberMe.value)
  }
</script>
<style scoped></style>
