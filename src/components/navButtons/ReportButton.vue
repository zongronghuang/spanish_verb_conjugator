<template>
  <div>
    <a
      href=""
      class="
        mx-1
        text-decoration-none 
        d-flex
        flex-column
        align-items-center
      "
      data-toggle="modal"
      data-target="#reportDialog"
      title="View the Spanish verbs that you've searched most"
    >
      <font-awesome-icon
        class="mr-1 align-middle"
        :icon="['fas', 'notes-medical']"
        size="3x"
      />
      <span class="h6 pt-2 my-0">Report</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "report-button",
  created () {
    console.log('[created] ReportButton')
  }
};
</script>

<style scoped>
a, a:visited {
  color: white;
}

a:hover, a:active {
  color: var(--spanish-yellow);
}
</style>