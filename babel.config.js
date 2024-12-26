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
      ],
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
          verbose: false
        }
      ]
    ]
  }
}
