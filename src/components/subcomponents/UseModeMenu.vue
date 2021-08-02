<template>
  <div id="mode-menu" class="w-25 mx-1">
    <select
      class="custom-select text-white bg-primary"
      v-model="mode"
      @change.prevent.stop="updateUseMode"
    >
      <option value="view" :selected="mode === 'view'">View</option>
      <option value="memory" :selected="mode === 'memory'">Memory</option>
      <option value="fill-in" :selected="mode === 'fill-in'">Fill-in</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "use-mode-menu",
  data() {
    return {
      mode: "view",
    };
  },
  methods: {
    updateUseMode() {
      this.$emit("update-use-mode", this.mode);
    },
  },
};
</script>

<style scoped>
#mode-menu {
  max-width: 200px;
}
</style>