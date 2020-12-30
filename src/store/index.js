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
      gerund: '',
      pastParticiple: '',
      allConjugations: []
    },
    infinitives: [],
  },
  mutations: {
    setInfinitives(state, infinitives) {
      state.infinitives = [...infinitives]
    },
    setVerb(state, allConjugations) {
      // 動詞 metadata
      // 時態和語氣預設為 indicative present
      // const { infinitive, infinitive_english, mood, mood_english, tense, tense_english, gerund, pastparticiple } = allConjugations[0]

      state.verb = { ...allConjugations[0] }
      state.verb.pastParticiple = state.verb.pastparticiple
      state.verb.allConjugations = [...allConjugations]
      delete state.verb.pastparticiple

      // state.verb.infinitive = infinitive
      // state.verb.infinitive_english = infinitive_english
      // state.verb.mood = mood
      // state.verb.mood_english = mood_english
      // state.verb.tense = tense
      // state.verb.tense_english = tense_english
      // state.verb.gerund = gerund
      // state.verb.pastParticiple = pastparticiple
      // state.verb.allConjugations = [...allConjugations]
    },
    setMoodAndTense(state, moodAndTense) {
      const { mood, tense, mood_english, tense_english } = moodAndTense

      state.verb.mood_english = mood_english
      state.verb.tense_english = tense_english
      state.verb.mood = mood
      state.verb.tense = tense
    }
  },
  actions: {
  },
  modules: {
  }
})
