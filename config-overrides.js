/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies

const path = require('path');

module.exports = {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	paths: (paths, _env) => {
		// Make the "app" folder be treated as the "src" folder
		// eslint-disable-next-line no-unused-expressions
		paths.appSrc = path.resolve(__dirname, 'app/javascript/src');
		// Tell the app that "src/index.js" has moved to "app/index.js"
		paths.appIndexJs = path.resolve(__dirname, 'app/javascript/src/index.tsx');
		return paths;
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	webpack: (config, _env) => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@app': path.resolve(__dirname, 'app/javascript'),
			};
		config.resolve.modules = [
			...config.resolve.modules,
			path.resolve(__dirname, 'app/javascript/(.*)'), 
			path.resolve(__dirname, ),
		];
		config.module.rules = [
			...config.module.rules,
			{
				test: /\.(?:js|tsx|ts|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		];
	return config;
	}
}