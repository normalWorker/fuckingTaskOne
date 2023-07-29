<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-left">
        <img src="@/assets/image/login/side-logo.png" />
      </div>
      <div class="login-form">
        <img
          src="@/assets/image/login/qrcode-icon.png"
          class="qrcode"
          @click="handleClick"
        />

        <LoginForm />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import LoginForm from "./components/LoginForm.vue";
// import LoginQrcode from "./components/LoginQrcode.vue";

const accountLogin = ref<boolean>(true);

const handleClick = () => {
  console.log("=======", accountLogin);
  accountLogin.value = !accountLogin.value;
};
</script>
<style lang="scss" scoped>
@import "./index";
</style>
