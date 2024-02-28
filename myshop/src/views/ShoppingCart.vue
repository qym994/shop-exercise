<script setup lang="ts">
const cart = useShopcartStore();
</script>
<template>
  <div class="cart">
    <h2 class="title">购物车</h2>
    <div class="cart-list" v-if="cart.items.length > 0">
      <div class="cart-item" v-for="item in cart.items" :key="item.id">
        <div class="img-wrap">
          <router-link :to="`product/${item.id}`">
            <img :src="item.image_url" :alt="item.name" />
          </router-link>
        </div>
        <div class="product-info">
          <router-link :to="`product/${item.id}`" class="itemname">{{ item.name }}</router-link>
          <CounterButton v-model:count="item.count"></CounterButton>
          <p class="itemprice">{{ item.price }}</p>
        </div>
        <SvgIcon @click="cart.removeItem(item.id)" name="icon-fail" class="clear"></SvgIcon>
      </div>
    </div>
    <div class="total" v-if="cart.items.length > 0">
      <div class="total-inner">
        <p>总件数：{{ cart.totalCount }}</p>
        <p>总价：￥{{ cart.totalPrice }}</p>
      </div>
    </div>
    <p v-else class="msg">--- 购物车中没有商品！---</p>
  </div>
</template>
<style lang="scss" scroped>
.title {
  text-align: center;
  font-size: 30rem;
}

.cart-list {
  .cart-item {
    display: flex;
    padding: 20rem;

    .img-wrap {
      width: 100rem;
      border-radius: 15px;
      overflow: hidden;
    }
    .product-info {
      padding-left: 40rem;
      flex: auto;
      .itemname {
        display: block;
        margin-bottom: 10rem;
        font-size: 14rem;
        font-weight: 600;
      }
      .itemprice {
        margin-bottom: 10rem;
        &::before {
          content: '￥';
        }
      }
    }
    .clear {
      font-size: 18rem;
    }
  }
}
.total {
  position: fixed;
  bottom: 60rem;
  width: 100%;
  display: flex;
  background-color: #ddd;
  justify-content: right;
  font-size: 12rem;
  padding-right: 10rem;
}
.msg {
  font-size: 20rem;
  text-align: center;
}
</style>
