const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const devConfig = {
  mode: 'development',
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({ // this plugin use to connect different app with each others ans share packages between them
      name: 'container',
      remotes: {
        'marketing': 'marketing@http://localhost:8081/remoteEntry.js'
      },
      shared: packageJson.dependencies //we use it as a variable to be automaticlly updated when any new package is installed ..if we want each project to have its own packages dont do this step ....imporant of it is to liad esh packad=ge once
    }),


  ],
};

module.exports = merge(commonConfig, devConfig);
