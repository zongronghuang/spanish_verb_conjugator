import dataset from '../assets/verb-conjugations.json'
const data = [...dataset]
const infinitives = []
const conjugationRange = 18

export default {
  // 取得所有動詞的原形動詞
  fetchInfinitives() {
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

    console.log('=== Verb infinitives fetched ===')
    console.log('Verb count', infinitives.length)

    return infinitives
  },

  // 取得動詞的所有變化
  getConjugations(verb) {
    const index = infinitives.findIndex(infinitive => infinitive === verb)

    if (index === -1) {
      return console.log('Verb not found')
    }

    const conjugations = [...data.slice(index, index + conjugationRange)]
    return conjugations
  },

  // 取得動詞的中繼資料
  getMetadata(verb) {
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