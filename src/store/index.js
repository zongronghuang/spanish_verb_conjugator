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
      currentConjugations: {},
      allConjugations: []
    },
    infinitives: [],
    configs: {
      useMode: 'view',
      mood_english: 'Indicative',
      tense_english: 'Present'
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
      // 要拿掉 1s_form 1p_form 之類的東西


      console.log('state verb', state.verb)
      return state.verb
    },
    setMoodAndTense(state, moodAndTense) {
      state.verb = {
        ...state.verb,
        ...moodAndTense
      }
    },
    /////// new ones vvvvvvv
    setConfigs(state, configsObj) {
      state.configs = {
        ...state.configs,
        ...configsObj
      }
    },
    // 待測試 (整合所有 verb{} 內資料修改)
    setVerbData(state, verbObj) {
      state.verb = {
        ...state.verb,
        ...verbObj
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
