<template>
  <!-- 常見不規則動詞列表 -->
  <div id="irregular-infinitive-list">
    <!-- 不規則動詞清單按鈕 -->
    <a
      href=""
      data-toggle="modal"
      data-target="#irregularVerbsDialog"
      title="Check out essential irregular verbs in Spanish"
      class="text-decoration-none mx-1"
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
  text-align: center;
}

a,
a:visited {
  color: white;
}

a:hover,
a:active {
  color: var(--spanish-yellow);
}

/* smart phones */
@media screen and (min-height: 280px) and (orientation: landscape) {
  a {
    flex-direction: row;
    align-items: center;
  }

  a > * {
    width: 80px;
    line-height: 100%;
  }

  span {
    margin-left: 0px;
  }
}

/* tablets + landscape orientation */
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
  a > * {
    width: 99px;
  }

  svg {
    font-size: 4rem;
  }

  span {
    font-size: 1.5rem;
    margin-left: 10px;
  }
}

@media screen and (min-height: 1024px) and (orientation: landscape) {
  a > * {
    width: 99px;
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



