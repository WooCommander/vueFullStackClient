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
      <div v-if="Error.message" class="error">{{ Error.message }}</div>
      <button @click="onRegister">Register</button>
      <div>Response:{{ result }}</div>
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
const result: { message: string } = reactive({ message: "" });
let Error: any = reactive({ message: "" });
const onRegister = async () => {
  try {
    const response = await AuthhenticationService.registerPost({ email: registerModel.email, password: registerModel.password });
    result.message = response.data.message;
    console.log(response.data);
    Error.message = ""
  } catch (error: any) {
    Error.message = error.response.data.error;
  }



}

</script>
<style lang="less">
.Register {
  .error {
    color: red;
  }
}


@media (min-width: 1024px) {
  .Register {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
