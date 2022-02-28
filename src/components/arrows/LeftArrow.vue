<template>
  <div
    class="left-panel d-flex align-items-center justify-content-center"
    id="left-panel"
    @click.prevent.stop="switchToNewConjugationGroup('back')"
  >
    <div>
      <router-link
        class="left-arrow d-inline-block w-100 text-decoration-none"
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
.left-panel {
  width: 40%;
  background-color: var(--spanish-red);
  cursor: pointer;
}

.left-arrow {
  font-size: 2vh;
}
</style>