// babel.config.js
module.exports = {
  presets: [
    [
      '@babel/preset-env', 
      {
        targets: {
          node: 'current',
        },
        modules: false,
      },
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
};