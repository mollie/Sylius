const path = require('path');
const Encore = require('@symfony/webpack-encore');
const syliusBundles = path.resolve(
	__dirname,
	'vendor/sylius/sylius/src/Sylius/Bundle/'
);
const uiBundleScripts = path.resolve(
	syliusBundles,
	'UiBundle/Resources/private/js/'
);
const uiBundleResources = path.resolve(
	syliusBundles,
	'UiBundle/Resources/private/'
);
// Admin config
Encore.setOutputPath('public/build/mollie-admin/')
	.setPublicPath('/build/mollie-admin')
	.addEntry('mollie-admin-entry', '../../src/Resources/assets/entry.js')
	.disableSingleRuntimeChunk()
	.cleanupOutputBeforeBuild()
	.enableSourceMaps(!Encore.isProduction())
	.enableVersioning(Encore.isProduction())
	.enableSassLoader();
const adminConfig = Encore.getWebpackConfig();
adminConfig.resolve.alias['sylius/ui'] = uiBundleScripts;
adminConfig.resolve.alias['sylius/ui-resources'] = uiBundleResources;
adminConfig.resolve.alias['sylius/bundle'] = syliusBundles;
adminConfig.externals = Object.assign({}, adminConfig.externals, {
	window: 'window',
	document: 'document',
});
adminConfig.name = 'admin';
module.exports = [adminConfig];


// .setOutputPath('public/build/mollie-admin/')
// .setPublicPath('/build/mollie-admin')
// .addEntry('mollie-admin-entry', './vendor/bitbag/mollie-plugin/src/Resources/assets/js/main.js')
// //.addStyleEntry('onboarding-plugin-css', './vendor/bitbag/mollie-plugin/src/Resources/assets/css/main.scss')
// .disableSingleRuntimeChunk()
// .cleanupOutputBeforeBuild()
// .enableSourceMaps(!Encore.isProduction())
// .enableVersioning(Encore.isProduction())
// .enableSassLoader();