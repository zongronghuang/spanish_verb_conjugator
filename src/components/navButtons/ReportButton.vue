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
@media screen and (min-width: 768px) and (orientation: portrait) {
  svg {
    font-size: 3rem;
  }
  span {
    font-size: 1.2rem;
  }
}

@media screen and (min-height: 768px) and (orientation: landscape) {
  svg {
    font-size: 3rem;
  }

  span {
    font-size: 1.5rem;
  }
}

@media screen and (min-width: 1024px) and (orientation: portrait) {
  svg {
    font-size: 4rem;
  }

  span {
    font-size: 1.5rem;
  }
}

@media screen and (min-height: 1024px) and (orientation: landscape) {
  a > * {
    width: 90px;
  }

  svg {
    font-size: 3.5rem;
  }

  span {
    font-size: 1.5rem;
    margin-left: 10px;
  }
}

/* desktops */
@media screen and (min-width: 1367px) {
  span {
    font-size: 1.5rem;
  }
}
</style>