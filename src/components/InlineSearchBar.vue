<template>
  <SearchBar class="inline-search-bar"/>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'inline-search-bar',
  components: {
    SearchBar
  },
  data () {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<style scoped>
.inline-search-bar {
  box-shadow: initial;
  transform: scale(1.3, 1.3);
}


</style>