const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
module.exports = {
    configureWebpack: {
    plugins: [
      AutoImport({
        imports: ['vue', 'vue-router', 'vue-i18n', 'vuex'],
        resolvers: [ElementPlusResolver({importStyle: 'sass'})],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ]
  }
};



