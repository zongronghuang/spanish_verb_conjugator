<template>
  <div id="mode-menu" class="w-25 mx-1">
    <select
      class="custom-select text-white bg-primary font-weight-bold"
      v-model="mode"
      @change.prevent.stop="updateUseMode"
    >
      <option class="font-weight-bold" value="view" :selected="mode === 'view'">
        View
      </option>
      <option
        class="font-weight-bold"
        value="memory"
        :selected="mode === 'memory'"
      >
        Memory quiz
      </option>
      <option
        class="font-weight-bold"
        value="fill-in"
        :selected="mode === 'fill-in'"
      >
        Fill-in quiz
      </option>
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