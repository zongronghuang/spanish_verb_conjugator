<template>
  <div
    class="d-flex align-items-center justify-content-center"
    id="left-panel"
    @click.prevent.stop="switchToNewConjugationGroup('back')"
  >
    <div>
      <router-link
        class="d-inline-block text-decoration-none w-100 my-1"
        to=""
        id="left-arrow"
        title="Back"
      >
        <font-awesome-icon
          :icon="['fas', 'chevron-circle-left']"
          class="h-100"
          size="2x"
          :style="{ color: 'white' }"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { switchToNewConjugationGroup } from "../../utils/mixins.js";
import { mapState } from "vuex";

export default {
  name: "left-arrow",
  mixins: [switchToNewConjugationGroup],
  created() {
    console.log("[created] LeftArrow");
  },
  computed: {
    ...mapState({
      verb: (state) => state.verb,
    }),
  },
};
</script>

<style scoped>
#left-panel {
  width: 25%;
  margin-left: 5px;
  background-color: var(--spanish-yellow);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

/* @media screen and (min-width: 768px) {
  #left-panel {
    width: 25%;
    display: flex;
    justify-content: center;
  }

  #left-panel > div {
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 1024px) {
  #left-panel {
    background-color: var(--spanish-yellow);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  }
} */
</style>