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
    configs: {
      useMode: 'view',
      mood: 'indicative',
      tense: 'present'
    }
  },
  mutations: {
    setInfinitives(state, infinitives) {
      state.infinitives = [...infinitives]
    },
    setVerb(state, allConjugations) {
      // 動詞 metadata
      // 時態和語氣預設為 indicative present
      state.verb = { ...allConjugations[0] }
      state.verb.pastParticiple = state.verb.pastparticiple
      state.verb.allConjugations = [...allConjugations]
      delete state.verb.pastparticiple

      console.log('state verb', state.verb)
      return state.verb
    },
    setMoodAndTense(state, moodAndTense) {
      state.verb = {
        ...state.verb,
        ...moodAndTense
      }
    },
    setUseMode(state, useMode) {
      state.configs.useMode = useMode
    },
    setMood(state, mood) {
      state.configs.mood = mood
    },
    setTense(state, tense) {
      state.configs.tense = tense
    }

  },
  actions: {
  },
  modules: {
  }
})
