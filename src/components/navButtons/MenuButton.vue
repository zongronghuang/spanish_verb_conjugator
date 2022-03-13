<template>
  <div>
    <a
      class="text-decoration-none mx-1"
      data-toggle="modal"
      data-target="#slideMenuDialog"
      title="show menu"
    >
      <font-awesome-icon :icon="['fas', 'bars']" size="2x" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'menu-button',
  created() {
    console.log('[created] MenuButton')
  }
}
</script>

<style scoped>
a {
  color: white;
}
</style>