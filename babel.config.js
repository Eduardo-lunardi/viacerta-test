module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          alias: {
            src: './src',
            assets: './assets'
          },
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.svg']
        }
      ]
    ]
  }
}
