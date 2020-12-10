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
      localStorage.setItem('infinitives', JSON.stringify(infinitives))
      console.log('=== Verb infinitives fetched ===')
      console.log('Verb count', infinitives.length)
      console.log("=== App ready ===");
    } else {
      return console.log("=== Failed to initialize app ===");
    }
  },

  // 取得動詞的所有變化
  getConjugations(verb) {
    const infinitives = JSON.parse(localStorage.getItem('infinitives'))
    const index = infinitives.findIndex(infinitive => infinitive === verb)
    const conjugationRange = 18
    const startId = index * conjugationRange
    const endId = startId + conjugationRange

    if (index === -1) {
      return console.log('=== Verb not found ===')
    }

    const conjugations = [...data.slice(startId, endId)]
    return conjugations
  },

  // 取得動詞的中繼資料
  getMetadata(verb) {
    const infinitives = localStorage.getItem('infinitives')
    const index = infinitives.findIndex(infinitive => infinitive === verb)

    if (index === -1) {
      return console.log('Verb not found')
    }

    const metadata = {
      infinitive: data[index].infinitive,
      translation: data[index].infinitive_english,
      engMood: data[index].mood_english,
      espMood: data[index].mood,
      engTense: data[index].tense_english,
      espTense: data[index].tense
    }

    return metadata
  }
}