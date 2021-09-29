<template>
  <div>
    <a
      href=""
      class="
        mx-1
        text-decoration-none text-white
        d-flex
        align-items-center
        justify-content-center
      "
      data-toggle="modal"
      data-target="#reportDialog"
      title="View the Spanish verbs that you've searched most"
    >
      <font-awesome-icon
        class="mr-1 align-middle"
        :icon="['fas', 'notes-medical']"
        size="2x"
        :style="{ color: 'white' }"
      />
      <span class="h5 py-0 my-0">Report</span>
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

</style>