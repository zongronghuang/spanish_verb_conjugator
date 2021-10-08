// module.exports = {
//   devServer: {
//     proxy: {
//       '/api/v2': {
//         target: "https://od-api.oxforddictionaries.com",
//         //changeOrigin: true, // not required
//         //secure: true, // not required
//         //ws: true,  // not required
//         // logLevel: 'debug', // not required
//         headers: {
//           Accept: 'application/json',
//           app_id: process.env.VUE_APP_ID,
//           app_key: process.env.VUE_APP_KEY
//         }
//       }
//     }
//   }
// }

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/spanish_verb_conjugator/'
    : '/'
}