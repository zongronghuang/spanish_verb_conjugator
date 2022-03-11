<template>
  <!-- 常見不規則動詞列表 -->
  <div id="irregular-infinitive-list h-100">
    <!-- 不規則動詞清單按鈕 -->
    <a
      href=""
      data-toggle="modal"
      data-target="#irregularVerbsDialog"
      title="Check out essential irregular verbs in Spanish"
      class="text-decoration-none"
    >
      <font-awesome-icon class="" :icon="['fas', 'clipboard-list']" size="2x" />
      <span class="h6 pt-2 my-0">Irregulars</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "irregular-infinitive-list",
  created() {
    console.log("[created] IrregularVerbsButton");
  },
};
</script>

<style scoped>
a {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a > * {
  display: inline-block;
  margin: 0 auto;
  text-align: left;
}

a,
a:visited {
  color: white;
}

a:hover,
a:active {
  color: var(--spanish-yellow);
}
</style>



