<template>
  <h4
    v-if="requests.length === 0"
    class="text-center">
    Заявок пока нет
  </h4>
</template>
<script>
  export default {
    props: ['requests'],
  };
</script>
<style lang=""></style>
