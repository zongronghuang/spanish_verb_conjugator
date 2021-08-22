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

export const collectSearchedVerbToLocalStorage = {
  methods: {
    collectSearchedVerbToLocalStorage(verb) {
      const maxNumOfDays = 7
      const today = (new Date()).toDateString()
      const history = JSON.parse(localStorage.getItem('history')) || []
      const length = history.length
      const lastItemDate = (length > 0) ? history[length - 1][0] : null
      let newHistory = history // [["date", {verb: count, ...}], [], ...]

      // 最後一項的日期不是 today，直接新增項目
      if (lastItemDate !== today) {
        newHistory.push([today, { [verb]: 1 }])
      }

      // 最後一項的日期是 today
      if (lastItemDate === today) {
        const length = newHistory.length
        const todayVerbs = newHistory[length - 1][1] // {verb: count, verb: count, ...}

        if (!todayVerbs[verb]) {
          todayVerbs[verb] = 1 // 還沒有查過 verb，新增 verb 及數量 1
        } else {
          todayVerbs[verb]++ // 已查過 verb，數量 ++
        }
        // 更新 newHistory 最後一項 (今日搜尋項目)
        newHistory[length - 1] = [today, todayVerbs]
      }

      // newHistory 長度超過指定天數，擷取最接近的歷史紀錄
      if (newHistory.length > maxNumOfDays) {
        const length = newHistory.length
        newHistory = newHistory.slice(length - maxNumOfDays, length)
      }

      localStorage.setItem('history', JSON.stringify(newHistory))
    }
  }
}