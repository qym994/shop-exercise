<script setup lang="ts">
const notice = useNoticeStore();
</script>
<template>
  <transition>
    <div class="notification" v-if="notice.shownotice" @click="notice.shownotice = false">
      <SvgIcon name="icon-notification"></SvgIcon>
      <p class="msg">已添加至购物车！</p>
    </div>
  </transition>
</template>
<style lang="scss" scroped>
.notification {
  width: 335rem;
  height: 50rem;
  border-radius: 8px;
  position: fixed;
  left: 20rem;
  top: 20rem;
  padding: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #777;
  background-color: #ddd;
  .fail {
    color: tomato;
  }
  svg {
    font-size: 30rem;
  }
  .msg {
    font-size: 16rem;
    padding-left: 10rem;
  }
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(100rem);
  opacity: 0;
}
</style>
