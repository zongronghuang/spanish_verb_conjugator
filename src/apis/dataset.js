import dataset from '../assets/verb-conjugations.json'
const data = [...dataset]

export default {
  // 取得所有動詞的原形動詞
  fetchInfinitives() {
    const infinitives = []

    if (data.length === 0) {
      return console.log('=== dataset missing! ===')
    }
    console.log('=== Fetching verb infinitives ===')

    for (let i = 0; i < data.length; i = i + 18) {
      const index = infinitives.findIndex(verb => verb === data[i].infinitive)
      if (index === -1) {
        infinitives.push(data[i].infinitive)
      }
    }

    // 取得原形動詞陣列 = 成功
    if (infinitives instanceof Array) {
      console.log('=== Verb infinitives fetched ===')
      console.log('Verb count', infinitives.length)
      console.log("=== App ready ===");
      return infinitives
    } else {
      return console.log("=== Failed to initialize app ===");
    }
  },

  // 取得動詞的所有變化
  getAllConjugations(verb, infinitives) {
    const index = infinitives.findIndex(infinitive => infinitive === verb)
    const conjugationRange = 18
    const startId = index * conjugationRange
    const endId = startId + conjugationRange

    if (index === -1) return []

    let conjugations = [...data.slice(startId, endId)]

    conjugations = this.addImperativeForm1P(conjugations)

    conjugations = this.addSubjunctiveImperfect2(conjugations)

    return conjugations
  },
  addImperativeForm1P(conjugations) {
    // Imperative Affirmative 和 Negative 加上第一人稱複數型
    const imperative_1P = conjugations.find(conjugation => conjugation.mood_english === 'Subjunctive' && conjugation.tense_english === 'Present').form_1p

    conjugations = conjugations.map(conjugation => {
      if (conjugation.mood_english === 'Imperative Affirmative') {
        conjugation.form_1p = imperative_1P
      }

      if (conjugation.mood_english === 'Imperative Negative') {
        conjugation.form_1p = `no ${imperative_1P}`
      }

      return conjugation
    })

    return conjugations
  },
  addSubjunctiveImperfect2(conjugations) {
    const preterite_3P = conjugations.find(conjugation => conjugation.tense_english === 'Preterite').form_3p
    const root = preterite_3P.substring(0, preterite_3P.length - 4)
    const ending = preterite_3P.substring(preterite_3P.length - 4)

    const subjunctiveImperfect = conjugations.find(conjugation => conjugation.mood_english === 'Subjunctive' && conjugation.tense_english === 'Imperfect')
    const subjunctiveImperfect2 = { ...subjunctiveImperfect }

    subjunctiveImperfect2.tense = `${subjunctiveImperfect.tense} 2`
    subjunctiveImperfect2.tense_english = `${subjunctiveImperfect.tense_english} 2`

    if (ending === 'aron') {
      subjunctiveImperfect2.form_1s = root + 'ase'
      subjunctiveImperfect2.form_2s = root + 'ases'
      subjunctiveImperfect2.form_3s = root + 'ase'
      subjunctiveImperfect2.form_1p = root + 'ásemos'
      subjunctiveImperfect2.form_2p = root + 'aseis'
      subjunctiveImperfect2.form_3p = root + 'asen'
    } else {
      subjunctiveImperfect2.form_1s = root + 'ese'
      subjunctiveImperfect2.form_2s = root + 'eses'
      subjunctiveImperfect2.form_3s = root + 'ese'
      subjunctiveImperfect2.form_1p = root + 'ésemos'
      subjunctiveImperfect2.form_2p = root + 'eseis'
      subjunctiveImperfect2.form_3p = root + 'esen'
    }

    conjugations.push(subjunctiveImperfect2)

    return conjugations
  }
}