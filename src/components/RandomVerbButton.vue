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
        class="mr-3 align-middle"
        :icon="['fas', 'dice']"
        size="3x"
        :style="{ color: 'white' }"
      />
      <span class="h5 font-weight-bold">Try Luck</span>
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
        w-25
        h-25
      "
    >
      <div id="spinner">
        <font-awesome-icon
          class="mr-1"
          :icon="['fas', 'spinner']"
          size="5x"
          :style="{ color: 'black' }"
          pulse
        />
      </div>
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
        //  this.pickRandomVerb();
      }, 1700);
    },
  },
};
</script>

<style scoped>
dialog {
  background-color: rgba(255, 255, 255, 0.5);
}
#spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>