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
          runtime: "automatic",
          development: process.env.NODE_ENV === 'development',
          importSource: '@welldone-software/why-did-you-render',
        }
      ],
      '@babel/preset-typescript',
    ],
    plugins: [
      "@babel/plugin-transform-class-properties",
    ],
  }
};
