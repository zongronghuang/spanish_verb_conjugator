<template>
  <div
    class="d-flex align-items-center justify-content-end mr-2"
    id="left-panel"
  >
    <div @click.prevent.stop="switchToNewConjugationGroup('back')">
      <router-link
        class="
          d-inline-block
          text-decoration-none
          w-100
          position-relative
          text-info
        "
        to=""
        id="left-arrow"
        title="Back"
      >
        <font-awesome-icon
          class="mr-1"
          :icon="['fas', 'chevron-circle-left']"
          size="3x"
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
  width: 10%;
}

#left-panel a {
  visibility: hidden;
}

#left-panel:hover a {
  visibility: visible;
}
</style>