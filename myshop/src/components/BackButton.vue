<script setup lang="ts"></script>
<template>
  <button class="back" @click="$router.back()">
    <SvgIcon name="icon-back"></SvgIcon>
  </button>
</template>
<style lang="scss" scroped>
.back {
  position: fixed;
  top: 20rem;
  left: 20rem;
  width: 30rem;
  height: 30rem;
  border-radius: 6px;
  font-size: 20rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
