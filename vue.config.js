module.exports = {
  devServer: {
    proxy: {
      '^/api/v2': {
        target: "https://od-api.oxforddictionaries.com",
        changeOrigin: true,
        ws: true,
        secure: true,
        logLevel: 'debug',
      }
    }
  }
}