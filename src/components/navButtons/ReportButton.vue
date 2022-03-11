<template>
  <div>
    <a
      href=""
      class="text-decoration-none mx-1"
      data-toggle="modal"
      data-target="#reportDialog"
      title="View the Spanish verbs that you've searched most"
    >
      <font-awesome-icon class="" :icon="['fas', 'notes-medical']" size="2x" />
      <span class="h6 pt-2 my-0">Report</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "report-button",
  created() {
    console.log("[created] ReportButton");
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