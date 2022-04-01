// 確認資料庫的資料狀態及是否正確
// 自行更新資料庫後，用來檢查資料庫是否正確
// import dataset from '../assets/verb-conjugations.json'
// const data = [...dataset]

// export default {
//   // 取得目前動詞數量
//   getVerbCount() {

//   },

//   // 確認動詞有無混雜
//   findDisplacedVerbs() {

//   },

//   // 確認動詞的時態排序正確
//   findDisplacedTenses() {
//     // 一個動詞有 18 個時態
//     const tenses = ['Indicative Present', 'Indicative Future', 'Indicative Imperfect', 'Indicative Preterite', 'Indicative Conditional', 'Indicative Present Perfect', 'Indicative Future Perfect', 'Indicative Past Perfect', 'Indicative Preterite (Archaic)', 'Indicative Conditional Perfect', 'Subjunctive Present', 'Subjunctive Imperfect', 'Subjunctive Future', 'Subjunctive Present Perfect', 'Subjunctive Future Perfect', 'Subjunctive Past Perfect', 'Imperative Affirmative Present', 'Imperative Negative Present']
//     let tenseIndex = 0

//     for (let i = 0; i < data.length; i++) {
//       if (`${data[i].mood_english} ${data[i].tense_english}` !== tenses[tenseIndex]) {
//         console.log('verb', data[i].infinitive, '| displaced mood/tense', data[i].mood_english + ' ' + data[i].tense_english)
//       }

//       tenseIndex++

//       if (tenseIndex === 18) {
//         tenseIndex = 0
//       }
//     }
//   },

//   // 確認是否有重複輸入的動詞
//   findRedundantVerbs() {

//   }
// }
