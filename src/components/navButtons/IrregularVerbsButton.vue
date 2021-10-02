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
      <font-awesome-icon class="" :icon="['fas', 'clipboard-list']" size="3x" />
      <span class="h6 pt-2 my-0">Irregular Verbs</span>
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
  display: block flex;
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

/* @media screen and (min-height: 320px) and (orientation: landscape) {
  a {
  flex-direction: row;

  justify-content: space-between;
  font-size: 1rem;
  flex-grow: 1;
  width: 100px;
  } 
}*/

@media screen and (min-height: 280px) and (orientation: landscape) {
  a {
    flex-direction: row;
    align-items: center;
  }

  a > * {
    width: 110px;
    line-height: 100%;
  }

  span {
    margin-left: 3px;
  }
}

@media screen and (min-height: 320px) and (orientation: landscape) {
  /* a {
    flex-direction: row;
    align-items: center;
  } */

  a > * {
    width: 80px;
    line-height: 100%;
  }
}

/* tablets & desktops + landscape orientation */
@media screen and (min-width: 1024px) {
  a > * {
    width: 110px;
  }
  span {
    font-size: 1.6rem;
    margin-left: 10px;
  }
}
</style>



