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
  getAllConjugationsByVerb(infinitive, infinitiveList) {
    const index = infinitiveList.findIndex(item => item === infinitive)
    const numberOfConjugationsByVerb = 18
    const startId = index * numberOfConjugationsByVerb
    const endId = startId + numberOfConjugationsByVerb

    if (index === -1) return []

    let conjugations = [...data.slice(startId, endId)]

    conjugations = this.addImperativesFor1P(conjugations)
    conjugations = this.addSubjunctiveImperfect2(conjugations)

    return conjugations
  },
  addImperativesFor1P(conjugations) {
    // Imperative Affirmative 和 Negative 加上第一人稱複數型
    const imperative_1P = conjugations
      .find(conjugation =>
        conjugation.mood_english === 'Subjunctive' &&
        conjugation.tense_english === 'Present')
      .form_1p

    conjugations = conjugations.map(conjugation => {
      if (conjugation.mood_english === 'Imperative Affirmative') {
        conjugation.form_1p = imperative_1P

        // -se 類反身動詞
        const reflexiveStart = 'nos '
        if(conjugation.form_1p.startsWith(reflexiveStart)) {
          conjugation.form_1p = conjugation.form_1p
            .replace(reflexiveStart, '')
          
          // -erse 和 -irse 1P 人稱動詞
          if(conjugation.form_1p.endsWith('amos')) {
            conjugation.form_1p = conjugation.form_1p.replace('amos', 'ámonos')
          }

          // -arse 1P 人稱動詞
          if (conjugation.form_1p.endsWith('emos')) {
            conjugation.form_1p = conjugation.form_1p.replace('emos', 'émonos')
          }
        }
      }

      if (conjugation.mood_english === 'Imperative Negative') {
        conjugation.form_1p = `no ${imperative_1P}`
      }

      return conjugation
    })

    return conjugations
  },
  addSubjunctiveImperfect2(conjugations) {
    // 從 preterite_3P 分析出 subjunctive imperfect 2 字根 
    // ending 是 "aron" 或 "eron"
    const preteriteEndingLength_3P = 4
    const preterite_3P = conjugations
      .find(conjugation => conjugation.tense_english === 'Preterite')
      .form_3p
    const root = preterite_3P
      .substring(0, preterite_3P.length - preteriteEndingLength_3P)
    const ending = preterite_3P
      .substring(preterite_3P.length - preteriteEndingLength_3P)

    // 用 subjunctive imperfect 建立 subjunctive imperfect 2
    const subjunctiveImperfect = conjugations.find(conjugation =>
      conjugation.mood_english === 'Subjunctive' &&
      conjugation.tense_english === 'Imperfect'
    )

    // 加入 Subjunctive Imperfect 2 的資料
    let subjunctiveImperfect2 = {
      ...subjunctiveImperfect,
      tense: `${subjunctiveImperfect.tense} 2`,
      tense_english: `${subjunctiveImperfect.tense_english} 2`
    }

    if (ending === 'aron') {
      subjunctiveImperfect2 = {
        ...subjunctiveImperfect2,
        form_1s: root + 'ase',
        form_2s: root + 'ases',
        form_3s: root + 'ase',
        form_1p: root + 'ásemos',
        form_2p: root + 'aseis',
        form_3p: root + 'asen'
      }
    }

    if (ending === 'eron') {
      subjunctiveImperfect2 = {
        ...subjunctiveImperfect2,
        form_1s: root + 'ese',
        form_2s: root + 'eses',
        form_3s: root + 'ese',
        form_1p: root + 'ésemos',
        form_2p: root + 'eseis',
        form_3p: root + 'esen'
      }
    }

    // -se 類反身動詞 (處理代名詞變化)
    const reflexiveStart = 'se '
    if (root.startsWith(reflexiveStart)) {
      subjunctiveImperfect2 = {
        ...subjunctiveImperfect2,
        form_1s: subjunctiveImperfect2.form_1s.replace(reflexiveStart, 'me '),
        form_2s: subjunctiveImperfect2.form_2s.replace(reflexiveStart, 'te '),
        form_1p: subjunctiveImperfect2.form_1p.replace(reflexiveStart, 'nos '),
        form_2p: subjunctiveImperfect2.form_2p.replace(reflexiveStart, 'os ')
      }
    }

    conjugations.push(subjunctiveImperfect2)

    return conjugations
  }
}