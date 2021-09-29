<template>
  <!-- 常見不規則動詞列表 -->
  <div id="irregular-infinitive-list">
    <!-- 不規則動詞清單按鈕 -->
    <a
      href=""
      data-toggle="modal"
      data-target="#irregularVerbsDialog"
      title="Check out essential irregular verbs in Spanish"
      class="
        mx-1
        text-decoration-none text-white
        d-flex
        align-items-center
        justify-content-center
      "
    >
      <font-awesome-icon
        class="mr-1 align-middle"
        :icon="['fas', 'clipboard-list']"
        :style="{ color: 'white' }"
        size="2x"
      />
      <span class="h5 py-0 my-0">Irregular verbs</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "irregular-infinitive-list",
  created() {
    console.log("[created] IrregularVerbsButton");
  }
};
</script>

<style scoped>
</style>



