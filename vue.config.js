module.exports = {
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-prod.ts')
      config.set('externals', {
        lodash: '_',
        echarts: 'echarts',
        nprogress: 'NProgress',
        wangeditor: "wangEditor",
        'element-plus': 'ElementPlus',
        'vue-router': 'VueRouter',
        vue: 'Vue',
      })
      config.plugin('html').tap(args => {
        args[0].isProd = true
        return args
      })
    })


    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
      config
        .entry('app')
        .clear()
        .add('./src/main-dev.ts')
      config.plugin('html').tap(args => {
        args[0].isProd = false
        return args
      })
    })


  }
}
