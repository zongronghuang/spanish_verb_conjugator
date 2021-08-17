export const switchToNewConjugationGroup = {
  methods: {
    switchToNewConjugationGroup(order) {
      const {
        allConjugations: conjugationGroups,
        tense_english: currentTense_english,
        mood_english: currentMood_english,
      } = this.verb;

      const currentGroupID = conjugationGroups.findIndex(
        (group) =>
          group.tense_english === currentTense_english &&
          group.mood_english === currentMood_english
      );

      let newGroupID = 0;

      const newGroupIDPolicies = {
        next: () => {
          if (currentGroupID < conjugationGroups.length - 1) {
            newGroupID = currentGroupID + 1;
          } else {
            newGroupID = 0;
          }
        },
        back: () => {
          if (currentGroupID > 0) {
            newGroupID = currentGroupID - 1;
          } else {
            newGroupID = conjugationGroups.length - 1;
          }
        },
      };

      newGroupIDPolicies[order]();

      this.$store.commit('setVerbData', conjugationGroups[newGroupID])

      // [{...}]
      this.$emit("fetch-selected-conjugations", [
        conjugationGroups[newGroupID],
      ]);
    }
  }
}