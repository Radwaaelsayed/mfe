const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJson = require('../package.json')
const domain = process.env.PRODUCTION_DOMIN

const prodConfig = {
    mode: 'production',
    output: '[name].[contenthash].js',//this output will be dynamic different files name ..this for avoid caching
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJson.dependencies

        }),

    ]
}

module.exports = merge(commonConfig, prodConfig);
