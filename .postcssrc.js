// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: [
    // для редактирования целевых браузеров: используйте "browserslist" поле в package.json
    require('autoprefixer')
  ]
}
