<template>
  <div>
    <div
      class="modal-backdrop"
      @click="$emit('close')"></div>
    <div class="modal">
      <h3 v-if="title">{{ title }} <slot></slot></h3>
    </div>
  </div>
</template>
<script>
  export default {
    emits: ['close'],
    props: {
      title: {
        type: String,
      },
    },
  };
</script>
<style lang=""></style>
