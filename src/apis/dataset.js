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

    const conjugations = [...data.slice(startId, endId)]
    return conjugations
  },
}