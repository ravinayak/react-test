// babel.config.js
module.exports = (api) => {
  const isTest = api.env('test');
  let babelPresetEnv = {
    targets: {
      node: 'current',
    }
  };

  if(!isTest) {
    babelPresetEnv = {
      ...babelPresetEnv,
      modules: false,
    }
  }

  return {
    presets: [
      [
        '@babel/preset-env',
        babelPresetEnv,
      ],
      [
        "@babel/preset-react",
        {
          "runtime": "automatic"
        }
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      "@babel/plugin-transform-class-properties",
    ],
  }
};
