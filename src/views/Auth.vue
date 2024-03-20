<template>
  <form
    class="card"
    @submit.prevent="onSubmit">
    <h1>Войти в систему</h1>
    <div :class="['form-control', { invalid: eError }]">
      <label for="email">Email</label>
      <input
        @blur="eBlur"
        v-model="email"
        type="email"
        id="email" />
      <small v-if="eError">{{ eError }}</small>
    </div>
    <div :class="['form-control', { invalid: pError }]">
      <label for="password">Password</label>
      <input
        @blur="pBlur"
        v-model="password"
        type="password"
        id="password" />
      <small v-if="pError">{{ pError }}</small>
    </div>
    <button
      class="btn primary"
      :disabled="isSubmitting">
      Войти
    </button>
  </form>
</template>
<script>
  import { useLoginForm } from '@/use/login-form.js';
  export default {
    setup() {
      return {
        ...useLoginForm(),
      };
    },
  };
</script>
<style lang=""></style>
