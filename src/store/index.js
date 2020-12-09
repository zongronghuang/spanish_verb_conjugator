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
  },
  mutations: {
    setVerb(state, conjugations) {
      state.verb.infinitive = conjugations[0].infinitive
      state.verb.engTranslation = conjugations[0].infinitive_english
      state.verb.conjugations = [...conjugations]

      console.log(state.verb.infinitive)
      console.log(state.verb.engTranslation)
      console.log(state.verb.conjugations)
    }
  },
  actions: {
  },
  modules: {
  }
})
