<template>
  <div class="flex-grow-1 text-center">
    <!-- 設定按鈕 -->
    <a href="" class="text-decoration-none">
      <font-awesome-icon
        :icon="['fas', 'cog']"
        size="2x"
        :style="{ color: 'white' }"
        @click.prevent.stop="showSettingsDialog"
      />
    </a>

    <!-- 設定對話框 -->
    <dialog ref="settingsDialog">
      <header>
        <span>Settings</span>
        <a href="" class="text-decoration-none">
          <font-awesome-icon
            :icon="['fas', 'window-close']"
            size="2x"
            :style="{ color: 'white' }"
            class="float-right"
            @click.prevent.stop="closeSettingsDialog"
          />
        </a>
      </header>
      <hr />
      <section class="d-flex flex-row">
        <span class="">Use mode</span>
        <button>View</button>
        <button>Flash card</button>
        <button>Fill-in</button>
      </section>
      <section class="d-flex flex-row">
        <span>Mood</span>
        <button>Indicative</button>
        <button>Imperative</button>
        <button>Subjunctive</button>
      </section>
      <section
        class="
          border
          d-flex
          flex-wrap
          justify-content-around
          align-items-center
        "
      >
        <!-- 顯示 tense buttons -->
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
        <button>tense</button>
      </section>
    </dialog>
  </div>
</template>

<script>
export default {
  name: "settings-buttons",
  data() {
    return {};
  },
  methods: {
    showSettingsDialog() {
      this.$refs.settingsDialog.showModal();
    },
    closeSettingsDialog() {
      this.$refs.settingsDialog.close();
    },
  },
};
</script>

<style scoped>
dialog {
  background-color: red;
}
</style>