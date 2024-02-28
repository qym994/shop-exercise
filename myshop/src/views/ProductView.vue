<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const { data } = useFetch(`/products/${route.params.id}`).json<Product>();
const count = ref(1);
const cart = useShopcartStore();
const notice = useNoticeStore();
function addItemHandle(product: Product) {
  cart.addItem(product, count.value);
  notice.shownotice = true;
  notice.hidenotice();
  router.push('/cart');
}
</script>
<template>
  <div class="product">
    <BackButton></BackButton>
    <div class="product-view" v-if="data">
      <div class="img-wrap">
        <img :src="data.image_url" :alt="data.name" />
      </div>
      <div class="desc-wrap">
        <h2 class="name">{{ data.name }}</h2>
        <h3 class="price">{{ data.price }}</h3>
        <p class="desc">{{ data.description }}</p>
        <CounterButton v-model:count="count"></CounterButton>
        <button class="addcart" @click="addItemHandle(data)">加入购物车</button>
      </div>
    </div>
    <p v-else>数据异常QAQ</p>
  </div>
</template>
<style lang="scss" scroped>
.desc-wrap {
  padding: 20rem;
  .price {
    &::before {
      content: '￥';
    }
  }
  .addcart {
    width: 335rem;
    position: fixed;
    bottom: 80rem;
    font-size: 24rem;
    padding: 10rem;
    background-color: #ddd;
    border: none;
    outline: none;
  }
}
</style>
