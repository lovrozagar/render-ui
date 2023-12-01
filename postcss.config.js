module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-import'),
    require('autoprefixer'),
    require('cssnano'),
    require('postcss-preset-env')({
      browsers: ['last 2 versions', '> 5%'],
    }),
  ],
}
