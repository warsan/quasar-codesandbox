// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    // Для редактирования целевых браузеров: используйте поле "browserslist" в package.json
    require('autoprefixer')
  ]
}
