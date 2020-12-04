import database from '../assets/verb-conjugations.json'
const data = [...database]
const infinitives = []
const conjugationRange = 18

export default {
  // 取得所有動詞的原形動詞
  fetchInfinitives() {
    console.log('Fetching verb infinitives')


    for (let i = 0; i < data.length; i = i + 18) {

      const array = data.slice(i, i + 18)
      console.log('start', i, 'array', array)




      // const index = infinitives.findIndex(ele => ele === data[i].infinitive)
      // if (index === -1) {
      //   infinitives.push(data[i].infinitive)
      // } else {
      //   // console.log('repeated element', data[i].infinitive, 'id', i)
      // }
    }

    console.log('Fetched all verb infinitives')
    console.log('infinitives length', infinitives.length)
    console.log(infinitives)

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