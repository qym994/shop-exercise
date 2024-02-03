<script setup lang="ts">
//
const products = ref(<Product[]>[]);

fetch(import.meta.env.VITE_BASE_URL + '/products')
  .then((res) => res.json() as Promise<Page<Product>>)
  .then((data) => (products.value = data.data));
</script>
<template>
  <div class="product-list">
    <div class="product" v-for="item in products" :key="item.id">
      <div class="img-box">
        <img :src="item.image_url" :alt="item.name" />
      </div>
      <div class="name">{{ item.name }}</div>
      <div class="price">{{ item.price }}</div>
    </div>
  </div>
</template>
<style lang="scss" scroped>
.product-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .product {
    padding: 20rem;
    .img-box {
      border-radius: 15%;
      overflow: hidden;
      box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
    }

    .name {
      font-size: 15rem;
      padding: 10rem 0;
      text-align: center;
    }
    .price {
      &::before {
        content: '￥';
      }
    }
  }
}
</style>
