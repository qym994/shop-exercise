<script setup lang="ts">
const store = useKeywordsStore();
const keywords = storeToRefs(store);
</script>
<template>
  <div class="main">
    <div class="serchtab">
      <input
        type="text"
        class="input"
        v-model="keywords.keywords.value"
        placeholder="  请输入搜索内容"
      />
    </div>
  </div>
</template>
<style lang="scss" scroped>
.serchtab {
  width: inherit;
  text-align: center;
  .input {
    font-size: 20rem;
    width: 80%;
    margin: 20rem;
    border: 1rem solid black;
    outline: none;
    border-radius: 15rem;
  }
}
</style>
