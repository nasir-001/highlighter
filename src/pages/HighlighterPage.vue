<template>
  <div style="margin: 100px;">
    <textarea v-model="textInput" data-testid="source-text"></textarea>

    <div style="padding-top: 20px;">
      <input v-model="searchInput" data-testid="search-term" id="text-to-search" @keyup="showText()" />
    </div>

    <div style="padding-top: 20px;">
      case sensitive? <input v-model="checkInput" type="checkbox" data-testid="case-sensitive" @click="toggle()" />
    </div>

    <div data-testid="result" id="paragraph">
      {{ textInput }}
    </div>

  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HighlighterPage',
  setup() {
    const textInput = ref('')
    const searchInput = ref('')
    const checkInput = ref(false)

    const toggle = () => {
      checkInput.value = !checkInput.value
      showText()
    }

    const showText = () => {

      const textToSearch = ref(document.getElementById("text-to-search").value)
      
      const paragraph = ref(document.getElementById("paragraph"))

      textToSearch.value = textToSearch.value.replace(/\s*([^[:]+):\"([^"]+)"/g, "\\$&")

      const pattern = ref()

      if (checkInput.value === false) { 
        pattern.value = new RegExp(`${textToSearch.value}`, "gi")
        return paragraph.value.innerHTML = paragraph.value.textContent.replace(pattern.value, match => `<mark>${match}</mark>`)
      } else {
        pattern.value = new RegExp(`${textToSearch.value}`, "g")
        return paragraph.value.innerHTML = paragraph.value.textContent.replace(pattern.value, match => `<mark>${match}</mark>`)
      }
    }

    return {
      textInput,
      searchInput,
      checkInput,
      showText,
      toggle
    }
  },
})
</script>
