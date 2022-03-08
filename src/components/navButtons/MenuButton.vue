<template>
  <div>
    <a
      href=""
      class="text-decoration-none mx-1"
      data-toggle="modal"
      data-target="#slideMenuDialog"
      title="show menu"
    >
      <font-awesome-icon class="" :icon="['fas', 'bars']" size="2x" />
      <!-- <span class="h6 pt-2 my-0">Report</span> -->
    </a>
  </div>
</template>

<script>
export default {
  name: 'menu-button',
  created() {
    console.log('[created] MenuButton')
  },
  components: {},
  data(){return {}},
  methods: {}
}
</script>

<style scoped>
a {
  color: white;
}
</style>