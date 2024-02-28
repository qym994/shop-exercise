<script setup lang="ts">
const scrollEle = ref(null);
//获取滚动容器scrollEle

provide(SCROLL_ELE, scrollEle);
</script>

<template>
  <div ref="scrollEle">
    <h1 class="title">My Shop</h1>
    <SeachTab></SeachTab>
    <CategoryList></CategoryList>
    <ProductList></ProductList>
    <BackTop></BackTop>
  </div>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
}
</style>
