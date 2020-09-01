module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.123.174:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: '@import "@/styles/variables.scss";'
      }
    }
  }
}
