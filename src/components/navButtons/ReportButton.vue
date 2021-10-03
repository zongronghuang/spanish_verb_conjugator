<template>
  <div>
    <a
      href=""
      class="text-decoration-none mx-1"
      data-toggle="modal"
      data-target="#reportDialog"
      title="View the Spanish verbs that you've searched most"
    >
      <font-awesome-icon class="" :icon="['fas', 'notes-medical']" size="3x" />
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
  display: block flex;
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

@media screen and (min-height: 280px) and (orientation: landscape) {
  a {
    flex-direction: row;
    align-items: center;
  }

  a > * {
    width: 100px;
    line-height: 100%;
    margin: 0 3px;
  }

  span {
    margin-left: 3px;
  }
}

@media screen and (min-height: 320px) and (orientation: landscape) {
  a > * {
    width: 70px;
    line-height: 100%;
    margin-top: 3px;
  }
}

/* tablets & desktops + landscape orientation */
@media screen and (min-width: 1024px) {
  a > * {
    width: 90px;
  }
  span {
    font-size: 1.5rem;
    margin-left: 10px;
  }
}
</style>