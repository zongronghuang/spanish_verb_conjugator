import axios from 'axios'
const baseURL = "https://od-api.oxforddictionaries.com/api/v2"
const dictionary = axios.create({
  baseURL
})

export default {
  // 確認是否存在，是否為動詞
  checkLexicalCategory(text) {
    return dictionary.get(`/lemmas/es/${text}`)
  },

  // 取得動詞相關資料
  getMetadata(verb) {
    return dictionary.get(`/entries/es/${verb}`)
  },

  // 確認是否為規則動詞 (需權限升級)
  getInflections(verb) {
    return dictionary.get(`/inflections/es/${verb}`)
  },

  // 取得動詞的英文翻譯 (需權限升級)
  getEngTranslations(verb) {
    return dictionary.get(`/translations/es/en/${verb}`)
  }
}