module.exports = {
  "stories": [
	"../src/**/*.stories.mdx",
	"../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
	"@storybook/addon-docs",
	"@storybook/addon-essentials",
	"@storybook/addon-knobs",
	"@storybook/addon-links",
	"@storybook/addon-viewport",
	{
	  name: '@storybook/preset-scss',
	  options: {
		cssLoaderOptions: {
		  modules: {
			localIdentName: '[name]__[local]'
		  }
		}
	  }
	},
  ],
  "core": {
	"builder": "webpack5"
  }
}