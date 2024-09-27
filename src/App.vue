<template>
  <Dialog />
  <Loading />
  <router-view />
</template>

<script setup lang="ts">
import Loading from '@/components/organisms/Loading.vue'
import Dialog from '@/components/organisms/Dialog.vue'
</script>

<style scoped lang="scss">  
  main {
    background-color: #03346C;
  }
</style>
