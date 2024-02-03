<script setup lang="ts"></script>

<template>
  <router-view class="main"></router-view>
  <bottom-nav></bottom-nav>
</template>

<style lang="scss" scoped>
.main {
  height: calc(100vh - var(--bottom-nav-height));
  overflow: auto;
}
</style>
