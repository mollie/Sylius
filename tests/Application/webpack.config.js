const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('./public/bundles/bitbagsyliusmollieplugin/build')
  .setPublicPath('/build')

  /*
    * ENTRY CONFIG
    *
    * Add 1 entry for each "page" of your app
    * (including one that's included on every page - e.g. "app")
    *
    * Each entry will result in one JavaScript file (e.g. app.js)
    * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
    */
  .addEntry('onboarding-plugin', '../../src/Resources/assets/js/main.js')
  .addStyleEntry('onboarding-plugin-css', '../../src/Resources/assets/css/main.scss')

  .disableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .enableSassLoader()
  .autoProvidejQuery();
;

module.exports = Encore.getWebpackConfig();
