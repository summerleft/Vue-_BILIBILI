module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
    },
  },
  // 开启代理服务器(方式一)
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }
  // 开启代理服务器(方式二)
  devServer: {
    proxy: {
      '/athust': {
        target: 'http://localhost:5000',
        pathRewrite: {'^/athust':''},
        // ws: true, // 用于支持websocket
        // changeOrigin: true // 用于控制请求头中的host值
      },
      '/demo': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/demo':''},
      }
    }
  }
}