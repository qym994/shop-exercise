<script setup lang="ts">
const products = ref<Product[]>([]);
const page = ref(1);
const route = useRoute();
const store = useKeywordsStore();
const keywords = storeToRefs(store);
const debouncedKeyword = refDebounced(keywords.keywords, 200);

const url = computed(() => {
  if (route.params.catagoryId) {
    return `products/category/${route.params.catagoryId}?page=${page.value}`;
  } else if (keywords) {
    return `products/search?name=${debouncedKeyword.value}&page=${page.value}`;
  } else {
    return `products?page=${page.value}`;
  }
});
const { data, isFetching } = useFetch(url).json<Page<Product>>();
//获取滚动容器scrollEle
const scrollEle = inject<Ref<HTMLDivElement>>(SCROLL_ELE);
//无限滚动
useInfiniteScroll(
  scrollEle,
  () => {
    if (data.value && page.value < data.value?.totalPages) {
      page.value++;
    }
  },
  {
    distance: 200,
    interval: 200,
    direction: 'bottom',
  },
);
//滚动后重置页码再搜索
watch(
  () => debouncedKeyword.value,
  () => (page.value = 1),
);
//跳转分类后重置页码
onBeforeRouteUpdate(() => {
  page.value = 1;
});
//更新数据
watchEffect(() => {
  if (data.value) {
    if (data.value.currentPage === 1) {
      products.value = data.value.data;
    } else {
      products.value.push(...data.value.data);
    }
  }
});

// onMounted(() => {
//   if (scrollEle) {
//     scrollEle.value.addEventListener('scroll', scrollload);
//   }
// });
// onUnmounted(() => {
//   if (scrollEle) {
//     scrollEle.value.removeEventListener('scroll', scrollload);
//   }
// });
</script>
<template>
  <div class="product-list">
    <router-link
      :to="`/product/${item.id}`"
      class="product"
      v-for="item in products"
      :key="item.id"
    >
      <div class="img-box">
        <img :src="item.image_url" :alt="item.name" />
      </div>
      <h2 class="name">{{ item.name }}</h2>
      <h3 class="price">{{ item.price }}</h3>
    </router-link>
  </div>
  <p class="msg" v-show="products.length == 0">没有找到！库鲁西QAQ！</p>
  <p class="msg" v-show="isFetching">正在加载啦！</p>
  <p class="msg" v-show="!isFetching && data?.totalPages === page">已经加载完毕啦!</p>
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
