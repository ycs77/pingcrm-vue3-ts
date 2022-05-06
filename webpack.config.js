const path = require('path')

// https://stefanbauer.me/tips-and-tricks/autocompletion-for-webpack-path-aliases-in-phpstorm-when-using-laravel-mix
module.exports = {
  output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
  resolve: {
    alias: {
      '@': path.resolve('./resources/js'),
    },
    extensions: ['.ts', '.vue', '.json'],
  },
  plugins: [require('unplugin-vue-define-options/webpack')()],
  devServer: {
    allowedHosts: 'all',
  },
}
