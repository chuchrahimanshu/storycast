module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@interfaces': './src/interfaces',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@validators': './src/validators',
          '@styles': './src/styles',
          src: './src',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
