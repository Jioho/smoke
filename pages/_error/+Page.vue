<template>
  <div class="error-page">
    <div v-if="is404">
      <h1>404 Page Not Found</h1>
      <p>This page could not be found.</p>
    </div>
    <div v-else>
      <h1>500 Internal Error</h1>
      <p>Something went wrong.</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['is404'])
</script>

<style lang="less">
.error-page {
  text-align: center;
  padding: 20px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);

  h1 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 2px;
    color: rgba(0, 0, 0, 0.85);
  }
}
</style>