<script setup lang="ts">
import type { ValidateError } from 'async-validator';
const route = useRoute();
const pageState = computed(() => {
  route.path;
});
const props = defineProps<{
  type: 'text' | 'password';
  label: string;
  errors?: ValidateError[];
  modelValue?: string;
}>();
</script>
<template>
  <form>
    <div :class="{ 'inp-wrap': true, error: errors }">
      <input
        :type="type"
        :placeholder="label"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <ul class="errorMsg">
        <li v-for="err in errors">
          {{ err.message }}
        </li>
      </ul>
    </div>
  </form>
</template>
<style lang="scss" scroped>
.inp-wrap {
  margin: 30rem 0;
  input {
    display: block;
    width: 100%;
    height: 50rem;
    border: none;
    outline: none;
    border-bottom: 1px #777 solid;
    font-size: 20rem;
    &:focus {
      border-bottom: 1px tomato solid;
    }
  }
}
.error {
  input {
    border-color: red;
  }
  .errorMsg {
    padding-left: 20rem;
    color: red;
    font-size: 14rem;
  }
}
</style>
