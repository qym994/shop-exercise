<script setup lang="ts">
const products = ref<Product[]>([]);
const page = ref(1);
const url = computed(() => `/products?page=${page.value}`);
const { data, loading, error } = useFetch<Page<Product>>(url);
//获取滚动容器scrollEle
const scrollEle = inject<Ref<HTMLDivElement>>(SCROLL_ELE);

const scrollload = () => {
  if (scrollEle) {
    if (
      scrollEle.value.clientHeight + scrollEle.value.scrollTop >=
      scrollEle.value.scrollHeight - 1
    ) {
      if (data.value && page.value < data.value?.totalPages) {
        page.value++;
      }
    }
  }
};

watchEffect(() => {
  if (data.value) {
    products.value.push(...data.value.data);
  }
});

onMounted(() => {
  if (scrollEle) {
    scrollEle.value.addEventListener('scroll', scrollload);
  }
});
onUnmounted(() => {
  if (scrollEle) {
    scrollEle.value.removeEventListener('scroll', scrollload);
  }
});
</script>
<template>
  <div class="product-list">
    <div class="product" v-for="item in products" :key="item.id">
      <div class="img-box">
        <img :src="item.image_url" :alt="item.name" />
      </div>
      <h2 class="name">{{ item.name }}</h2>
      <h3 class="price">{{ item.price }}</h3>
    </div>
  </div>
  <p class="msg" v-show="loading">正在加载啦！</p>
  <p class="msg" v-show="!loading && data?.totalPages === page">已经加载完毕啦! QAQ</p>
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
    }
    .price {
      &::before {
        content: '￥';
      }
    }
  }
}
.msg {
  text-align: center;
}
</style>
