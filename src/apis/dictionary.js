import axios from 'axios'
const baseURL = "https://od-api.oxforddictionaries.com/api/v2"
const strictMatch = "false"
const responseFormat = 'application/json'

// 建立 axios instance
const axiosInstance = axios.create({
  baseURL,

  // Oxford dictionaries API 必須提供的 header 資訊
  headers: {
    "Access-Control-Allow-Origin": "*",
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
    // console.log('ID', process.env.VUE_APP_ID)
    // console.log('key', process.env.VUE_APP_KEY)
    return dictionary.get(`/lemmas/es/${word}?strictMatch=${strictMatch}`)
  },

  // 取得動詞相關資料
  getMetadata(verb) {
    return dictionary.get(`/entries/es/${verb}?strictMatch=${strictMatch}`)
  },

  // 確認是否為規則動詞 (需權限升級)
  getInflections(verb) {
    return dictionary.get(`/inflections/es/${verb}?strictMatch=${strictMatch}`)
  },

  // 取得動詞的英文翻譯 (需權限升級)
  getEngTranslations(verb) {
    return dictionary.get(`/translations/es/en/${verb}?strictMatch=${strictMatch}`)
  }
}