<template>
  <div>
    <ControlPanel />

    <!-- 搜尋區域 -->
    <div class="mx-auto my-4 w-50">
      <h2>Feed a Spanish Verb</h2>

      <div class="input-group pb-3 mb-1 mt-5">
        <input
          type="text"
          class="form-control font-weight-bold"
          placeholder="Infinitive (-ar, -er, -ir)"
          aria-label="Feed an infinitive Spanish verb"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary font-weight-bold"
            type="button"
            id="button-addon2"
          >
            Conjugate
          </button>
        </div>
      </div>
    </div>
    <!-- 錯誤訊息 -->
    <div class="alert alert-warning w-50 text-center mx-auto" role="alert">
      A simple warning alert—check it out!
    </div>
  </div>
</template>

<script>
import ControlPanel from "../components/ControlPanel.vue";

export default {
  name: "search",
  components: {
    ControlPanel,
  },
};
</script>

<style scoped>
</style>