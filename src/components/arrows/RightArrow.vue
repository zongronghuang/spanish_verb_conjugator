<template>
  <div
    class="right-panel d-flex align-items-center justify-content-center"
    id="right-panel"
    @click.prevent.stop="switchToNewConjugationGroup('next')"
  >
    <div>
      <router-link
        class="right-arrow d-inline-block w-100 text-decoration-none"
        id="right-arrow"
        to=""
        title="Next"
      >
        <font-awesome-icon
          :icon="['fas', 'chevron-circle-right']"
          class="h-100"
          :style="{ color: 'white' }"
          size="2x"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { switchToNewConjugationGroup } from "../../utils/mixins.js";
import { mapState } from "vuex";

export default {
  name: "right-arrow",
  mixins: [switchToNewConjugationGroup],
  created() {
    console.log("[created] RightArrow");
  },
  computed: {
    ...mapState({
      verb: (state) => state.verb,
    }),
  },
};
</script>

<style scoped>
.right-panel {
  width: 40%;
  background-color: var(--spanish-red);
  cursor: pointer;
}

.right-arrow {
  font-size: 2vh;
}
</style>