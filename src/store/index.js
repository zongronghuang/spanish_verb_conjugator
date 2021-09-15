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
      verb_english: '',
      form_1s: '',
      form_2s: '',
      form_3s: '',
      form_1p: '',
      form_2p: '',
      form_3p: '',
      gerund: '',
      gerund_english: '',
      pastparticiple: '',
      pastarticiple_english: '',
      allConjugations: []
    },
    infinitives: [],
    configs: {
      useMode: 'view',
    }
  },
  mutations: {
    setInfinitives(state, infinitives) {
      state.infinitives = [...infinitives]
    },
    setConfigs(state, configsObj) {
      state.configs = {
        ...state.configs,
        ...configsObj
      }
    },
    // 放入 verb 某時態的整組 conjugations
    setVerbData(state, verbConjugations) {
      state.verb = {
        ...state.verb,
        ...verbConjugations
      }
    }

  },
  actions: {
  },
  modules: {
  }
})
