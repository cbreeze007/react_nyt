module.exports = {
  presets: [
    require('babel-preset-es2015'),
    require('babel-preset-stage-1'),
    require('babel-preset-react'),
  ],
  plugins: [
    require('babel-plugin-transform-decorators-legacy').default,
  ],
  env: {
    test: {
      plugins: [
        require('babel-plugin-espower'),
      ]
    }
  }
};
