<script setup lang="ts">
import type { SvgName } from '~virtual/svg-component';

const categorData: Array<{
  id: number;
  name: string;
  icon: SvgName;
}> = [
  {
    id: 1,
    name: '手机数码',
    icon: 'icon-smartphone',
  },
  {
    id: 2,
    name: '家居生活',
    icon: 'icon-chair',
  },
  {
    id: 3,
    name: '服饰鞋帽',
    icon: 'icon-shirt',
  },
  {
    id: 4,
    name: '电脑办公',
    icon: 'icon-computer',
  },
  {
    id: 5,
    name: '个护化妆',
    icon: 'icon-personalcare',
  },
  {
    id: 6,
    name: '母婴用品',
    icon: 'icon-baby',
  },
  {
    id: 7,
    name: '食品饮料',
    icon: 'icon-food',
  },
  {
    id: 8,
    name: '运动户外',
    icon: 'icon-sports',
  },
];
</script>
<template>
  <div class="category-list">
    <router-link
      :to="`/home/${item.id}`"
      class="category-item"
      v-for="item in categorData"
      :key="item.id"
    >
      <svg-icon :name="item.icon"></svg-icon>
      <span>{{ item.name }}</span>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.category-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 80rem;
  .category-item {
    font-size: 30rem;
    text-align: center;
    &.router-link-active {
      color: var(--highlight-color);
    }
    span {
      display: block;
      font-size: 14rem;
    }
  }
}
</style>
