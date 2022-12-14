const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 哪些文件自动引入，使用绝对路径
      // 需要是path.jion动态来拼接完整路径
      patterns: [path.join(__dirname, './src/assets/styles/mixins.less'), path.join(__dirname, './src/assets/styles/variables.less')]
    }
  }
})
