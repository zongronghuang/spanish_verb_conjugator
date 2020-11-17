

function getStem(verb) {
  // hablar => 'habl'
  // comer => 'com'
  // vivir => 'viv'
  return verb.substring(0, verb.length - 2)
}

function getInfinitiveClass(verb) {
  // hablar => 'ar'
  // comer => 'er'
  // vivir => 'ir'
  return verb.substring(verb.length - 2)
}


export const regularConjugators = {
  // indicatives
  indicative: {
    present(verb) {
      const stem = getStem(verb)
      const infinitiveClass = getInfinitiveClass(verb)

      switch (infinitiveClass) {
        case 'ar':

          break
        case 'er':
          break
        case 'ir':
          break
        default: console.log('Not a Spanish infinitive verb')
      }

    },
    future() { },
    preterite() { },
    imperfect() { },
    presentPerfect() { },
    pastPerfect() { },
    futurePerfect() { },
    conditional() { },
  },

  // subjunctives
  subjunctive: {
    present() { },
    future() { },
    preterite() { },
    imperfect1() { },
    imperfect2() { },
    presentPerfect() { },
    pastPerfect() { },
    futurePerfect() { },
    conditional() { },
  },

  // imperatives
  imperative() { },

  // participles
  gerund: "",
  pastParticiple: "",
}