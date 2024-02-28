<script setup lang="ts">
const scrollEle = inject<Ref<HTMLDivElement>>(SCROLL_ELE);
const { y } = useScroll(scrollEle, { behavior: 'smooth' });
const showbtn = computed(() => y.value > 300);
</script>
<template>
  <button class="backtop" v-show="showbtn" @click="y = 0">
    <SvgIcon name="icon-backtop"> </SvgIcon>
  </button>
</template>
<style lang="scss" scroped>
.backtop {
  position: fixed;
  bottom: 80rem;
  right: 20rem;
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
