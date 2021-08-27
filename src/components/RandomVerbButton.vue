<template>
  <div>
    <a
      href=""
      title="Get your lucky verb!"
      class="
        text-decoration-none text-white
        mx-2
        d-flex
        flex-row
        align-items-center
      "
      @click.prevent.stop="showAndCloseRandomVerbDialog"
    >
      <font-awesome-icon
        class="mr-1 align-middle"
        :icon="['fas', 'dice']"
        size="2x"
        :style="{ color: 'white' }"
      />
      <span>Try Luck</span>
    </a>

    <!-- 旋轉圖示對話框 -->
    <dialog
      ref="randomVerbDialog"
      class="
        position-relative
        container
        font-weight-bold
        rounded-lg
        text-center
        border-0
        bg-light
        w-25
        h-25
      "
    >
      <font-awesome-icon
        id="spinner"
        class="mr-1"
        :icon="['fas', 'spinner']"
        size="7x"
        :style="{ color: 'black' }"
        pulse
      />
    </dialog>
  </div>
</template>

<script>
export default {
  name: "random-verb-button",
  methods: {
    pickRandomVerb() {
      const infinitives = this.$store.state.infinitives;
      const randomId = Math.floor(Math.random() * infinitives.length);
      const pickedInfinitive = infinitives[randomId];

      this.$router.push(`/spanish-conjugator/${pickedInfinitive}`);
    },
    showRandomVerbDialog() {
      this.$refs.randomVerbDialog.showModal();
    },
    closeRandomVerbDialog() {
      this.$refs.randomVerbDialog.close();
    },
    showAndCloseRandomVerbDialog() {
      this.showRandomVerbDialog();

      setTimeout(() => {
        this.closeRandomVerbDialog();
        this.pickRandomVerb();
      }, 1700);
    },
  },
};
</script>

<style scoped>
#spinner {
  position: absolute;
  top: 30%;
  left: 30%;
}
</style>