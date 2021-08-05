<template>
  <button
    class="btn btn-info mt-3 font-weight-bold text-dark border border-light"
    id="peek"
    @click.stop.prevent="toggleIsPeekable"
  >
    <font-awesome-icon
      v-show="isPeekable"
      :icon="['fas', 'eye-slash']"
      size="1x"
    />

    <font-awesome-icon v-show="!isPeekable" :icon="['fas', 'eye']" size="1x" />
  </button>
</template>

<script>
export default {
  name: "PeekButton",
  props: {
    canPeekAtAnswers: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isPeekable: this.canPeekAtAnswers,
    };
  },
  methods: {
    toggleIsPeekable() {
      this.isPeekable = !this.isPeekable;
      this.$emit("update-can-peek-at-answers", this.isPeekable);
    },
  },
};
</script>

<style scoped>
#peek {
  position: absolute;
  right: 0%;
  top: 40%;
}
</style>