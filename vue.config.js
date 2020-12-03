module.exports = {
  devServer: {
    proxy: {
      '/api/v2': {
        target: "https://od-api.oxforddictionaries.com",
        changeOrigin: true,
        secure: true,
        ws: true,
        logLevel: 'debug',
        // headers: {
        //   Accept: 'application/json',
        //   app_id: process.env.VUE_APP_ID,
        //   app_key: process.env.VUE_APP_KEY
        // }
      }
    }
  }
}