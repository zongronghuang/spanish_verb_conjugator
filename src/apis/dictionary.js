// 需要解決 CORS 問題 (Oxford dictionary 不開放 CORS)

import axios from 'axios'
const baseURL = process.env.VUE_APP_DOMAIN
const queryLang = 'es'
const targetLang = 'en'
const strictMatch = "false"
const responseFormat = 'application/json'

// 建立 axios instance
const axiosInstance = axios.create({
  baseURL,
  // Oxford dictionaries API 必須提供的 header 資訊
  headers: {
    Accept: responseFormat,
    app_id: process.env.VUE_APP_ID,
    app_key: process.env.VUE_APP_KEY
  }
})

// 回傳資料 status code 為 2** => 回傳資料
// 若否，回傳錯誤
axiosInstance.interceptors.response.use(response => response, error => Promise.reject(error))

const dictionary = axiosInstance

export default {
  // 確認是否存在，是否為動詞
  getLexicalCategory(word) {
    // return dictionary.get(`/lemmas/${queryLang}/${word}?strictMatch=${strictMatch}`)
    return dictionary.get(`http://localhost:8080/api/v2/lemmas/${queryLang}/${word}`)
  },

  // getLexicalCategory(word) {
  //   return dictionary.get(`/lemmas/${queryLang}/${word}`)
  // },

  // 取得動詞相關資料
  getMetadata(verb) {
    return dictionary.get(`/entries/${queryLang}/${verb}?strictMatch=${strictMatch}`)
  },

  // 確認是否為規則動詞 (需權限升級)
  getInflections(verb) {
    return dictionary.get(`/inflections/${queryLang}/${verb}?strictMatch=${strictMatch}`)
  },

  // 取得動詞的英文翻譯 (需權限升級)
  getEngTranslations(verb) {
    return dictionary.get(`/translations/${queryLang}/${targetLang}/${verb}?strictMatch=${strictMatch}`)
  }
}