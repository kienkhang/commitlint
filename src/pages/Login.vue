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
        <div class="relative">
          <input
            class="border-b-[1px] w-full h-10 outline-none border-b-slate-500 mb-2"
            :class="{
              ' border-solid border-red-700 border-[1px] border-b-red-700':
                v$.username.$error,
            }"
            placeholder="Username"
            id="username"
            v-model="formData.username"
          />
          <!-- <span v-if="v$.username.$error == false" class="block"> </span> -->
          <span
            id="err-username"
            class="err-user block text-red-700 font-semibold"
            v-for="error in v$.username.$errors"
            >{{ error.$message }}</span
          >
        </div>
        <div>
          <input
            type="password"
            class="border-b-[1px] w-full h-10 outline-none border-b-slate-500 mb-2"
            :class="{
              ' border-solid border-red-700 border-[1px] border-b-red-700':
                v$.password.$error,
            }"
            placeholder="Password"
            id="password"
            v-model="formData.password"
          />

          <span
            id="err-password"
            class="mb-5 block text-red-700 font-semibold"
            v-for="error in v$.password.$errors"
            >{{ error.$message }}</span
          >
        </div>

        <div class="flex mb-8">
          <input class="w-5 h-5" type="checkbox" v-model="rememberMe" />
          <div class="ml-3 opacity-70">Remember me</div>
        </div>
        <button
          id="btn-submit"
          class="px-7 text-white drop-shadow-md py-2 bg-green-600 rounded"
          @click="submitForm($event)"
          :disabled="!v$"
        >
          LOGIN
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { required, minLength, helpers } from '@vuelidate/validators'

  const formData = reactive({
    username: '',
    password: '',
  })

  const rules = {
    username: {
      required: helpers.withMessage('username cannot be empty', required),
    },
    password: {
      required: helpers.withMessage('password cannot be empty', required),
      minLength: helpers.withMessage(
        'password should be at least 8 characters long',
        minLength(8)
      ),
    },
  }

  const v$ = useVuelidate(rules, formData)

  const submitForm = async (event) => {
    event.preventDefault()
    const isFormCorrect = await v$.value.$validate()
    if (isFormCorrect) {
      alert('submit')
    }
    // console.log({ isFormCorrect })
  }

  let rememberMe = ref(false)
</script>
<style scoped></style>
