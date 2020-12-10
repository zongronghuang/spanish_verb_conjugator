import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    verb: {
      infinitive: '',
      infinitive_english: '',
      mood: '',
      mood_english: '',
      tense: '',
      tense_english: '',
      conjugations: []
    },
  },
  mutations: {
    setVerb(state, conjugations) {
      // 動詞 metadata
      // 時態預設為 indicative present
      const { infinitive, infinitive_english, mood, mood_english, tense, tense_english } = conjugations[0]
      state.verb.infinitive = infinitive
      state.verb.infinitive_english = infinitive_english
      state.verb.mood = mood
      state.verb.mood_english = mood_english
      state.verb.tense = tense
      state.verb.tense_english = tense_english

      // 匯入完整的動詞變化
      state.verb.conjugations = [...conjugations]

      //console.log('state', state)
    }
  },
  actions: {
  },
  modules: {
  }
})
