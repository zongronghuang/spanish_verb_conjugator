import database from '../assets/verb-conjugations.json'
const data = [...database]
const infinitives = []
const conjugationRange = 18

export default {
  // 取得所有動詞的原形動詞
  fetchInfinitives() {
    console.log('Fetching verb infinitives')
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