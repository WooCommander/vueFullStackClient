<template>
  <div class="Register">

    <div class="container">
      <h1>Register</h1>
      {{ registerModel }}
      <div class="field">
        <input type="email" placeholder="email" v-model="registerModel.email" />
      </div>
      <div class="field">
        <input type="password" placeholder="password" v-model="registerModel.password" />
      </div>
      <button @click="onRegister">Register</button>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, reactive } from 'vue';
import AuthhenticationService from '@/services/AuthenticationService'
defineProps<{
  msg: string
}>()
const registerModel: { email: string, password: string } = reactive({ email: "", password: "" })
const onRegister = async () => {
  const response = await AuthhenticationService.registerPost({ email: registerModel.email, password: registerModel.password });
  console.log(response.data);

}
</script>
<style>
@media (min-width: 1024px) {
  .Register {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
