const path = require('path');
const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
	Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore.setOutputPath('public/bitbag')
	.setPublicPath('/bitbag')

	.addEntry(
		'mollie/admin',
		path.resolve(__dirname, './src/Resources/assets/admin/entry.js')
	)
	.addEntry(
		'mollie/shop',
		path.resolve(__dirname, './src/Resources/assets/shop/entry.js')
	)

	.disableSingleRuntimeChunk()
	.cleanupOutputBeforeBuild()
	.enableSourceMaps(!Encore.isProduction())
	.enableSassLoader();

const pluginConfig = Encore.getWebpackConfig();

module.exports = pluginConfig;
