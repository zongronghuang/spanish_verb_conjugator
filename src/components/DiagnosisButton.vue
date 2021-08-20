<template>
  <div class="">
    <a
      href=""
      class="
        text-decoration-none text-white
        d-flex
        align-items-center
        justify-content-center
        border
      "
      @click.prevent.stop="showDiagnosisDialog"
    >
      <font-awesome-icon
        class="mr-1 align-middle"
        :icon="['fas', 'notes-medical']"
        size="2x"
        :style="{ color: 'white' }"
        @click.prevent.stop=""
      />
      Diagnosis
    </a>
    <dialog ref="diagnosisDialog">
      <header>
        <span>Diagnosis</span>
        <a href="" class="text-decoration-none">
          <font-awesome-icon
            :icon="['fas', 'window-close']"
            size="1x"
            :style="{ color: 'white' }"
            class="float-right"
            @click.prevent.stop="closeDiagnosisDialog"
          />
        </a>
      </header>
      <hr />
      <p>Find your most searched verbs in the last 30 days.</p>
      <section>
        <div>
          <button>test</button>
        </div>
      </section>
    </dialog>
  </div>
</template>

<script>
export default {
  name: "diagnosis-button",
  data() {
    return {};
  },
  methods: {
    showDiagnosisDialog() {
      this.$refs.diagnosisDialog.showModal();
    },
    closeDiagnosisDialog() {
      this.$refs.diagnosisDialog.close();
    },
    getSearchCounts() {},
  },
};
</script>

<style scoped>
dialog {
  background-color: lightgray;
}
</style>