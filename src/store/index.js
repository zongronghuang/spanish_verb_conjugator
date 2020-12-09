import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    verb: {
      infinitive: '',
      engTranslation: '',
      conjugations: []
    },
    infinitives: []
  },
  mutations: {
    setInfinitives(state, infinitives) {
      state.infinitives = [...infinitives]
    },
    setVerb(state, conjugations) {
      state.verb.infinitive = conjugations[0].infinitive
      state.verb.engTranslation = conjugations[0].infinitive_english
      state.verb.conjugations = [...conjugations]
    }
  },
  actions: {
  },
  modules: {
  }
})
