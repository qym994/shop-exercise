<script lang="ts" setup></script>
<template>
  <div class="bottom-nav">
    <router-link to="/home"><svg-icon name="icon-home"></svg-icon></router-link>
    <router-link to="/cart"><svg-icon name="icon-shoppingcart"></svg-icon></router-link>
    <router-link to="/user"><svg-icon name="icon-user"></svg-icon></router-link>
  </div>
</template>

<style lang="scss" scoped>
.bottom-nav {
  border-top: 0.1px solid #ddd;
  width: 375rem;
  height: var(--bottom-nav-height);
  display: flex;
  text-align: center;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(1 / 3) * 100%;
    font-size: 25rem;
  }
}
</style>
