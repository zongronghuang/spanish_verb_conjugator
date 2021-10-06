<template>
  <div
    class="d-flex align-items-center justify-content-center"
    id="right-panel"
    @click.prevent.stop="switchToNewConjugationGroup('next')"
  >
    <div>
      <router-link
        class="d-inline-block text-decoration-none w-100 my-1"
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
#right-panel {
  width: 25%;
  margin-right: 5px;
  background-color: var(--spanish-yellow);
  box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
</style>