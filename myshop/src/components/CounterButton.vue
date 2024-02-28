<script setup lang="ts">
const props = defineProps<{ count: number }>();
const emits = defineEmits<{
  'update:count': [count: number];
}>();
const count = computed({
  get() {
    return props.count;
  },
  set(value: number) {
    emits('update:count', value);
  },
});
</script>
<template>
  <div class="counter">
    <button @click="count--" :disabled="count <= 0">-</button>
    <input type="text" class="count" v-model="count" />
    <button @click="count++">+</button>
  </div>
</template>
<style lang="scss" scroped>
.counter {
  display: flex;
  button {
    border: none;
  }
  .count {
    outline: none;
    text-align: center;
    font-size: 14rem;
    width: 40rem;
    border: none;
  }
}
</style>
