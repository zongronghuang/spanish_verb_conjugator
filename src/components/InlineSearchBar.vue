<template>
  <SearchBar class="inline-search-bar"/>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'inline-search-bar',
  components: {
    SearchBar
  }
}
</script>

<style scoped>
.inline-search-bar {
  box-shadow: initial;
  transform: scale(1.5, 1.5);
  z-index: 20;
}
</style>