module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  css:{
    loaderOptions:{
      css:{},
      postcss:{
        plugins:[
          require('postcss-px2rem')({
            //适配375屏幕，设计图750中量出来的尺寸要/2
            //配置成37.5是为了兼容没有适配rem布局的第三方ui库
            remUnit:37.5
          })
        ]
      }
    }
  },
  devServer: {//内网穿透
    disableHostCheck: true
  }
}