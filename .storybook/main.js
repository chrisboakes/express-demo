module.exports = {
	stories: ['../stories/**/*.stories.js'],
	addons: [
		'@storybook/addon-a11y',
		'@storybook/addon-docs',
		'@storybook/addon-jest/register'
	],
	// Add handlebars support
	webpackFinal: async (config, { configType }) => {
		config.module.rules.push({
			test: /\.handlebars|hbs$/,
			loader: "handlebars-loader"
		});

		return config;
	}
};
