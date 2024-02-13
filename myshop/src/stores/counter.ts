import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useKeywordsStore = defineStore('keywords', () => {
  const keywords = ref('')
  return { keywords }
})
