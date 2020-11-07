// eslint-disable-next-line import/no-unresolved
const path = require('path');
const slsw = require('serverless-webpack');
const AliasPlugin = require('enhanced-resolve/lib/AliasPlugin');

module.exports = {
  entry: slsw.lib.entries,
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: path.join(__dirname, '.webpack'),
  },
  devtool: 'cheap-module-source-map',
  mode:
    ['local', 'dev'].indexOf(process.env.APP_ENV) !== -1
      ? 'development'
      : 'production',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        enforce: 'pre', // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        include: __dirname,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  externals: [{ 'aws-sdk': 'commonjs aws-sdk' }],
  resolve: {
    plugins: [
      new AliasPlugin(
        'described-resolve',
        [
          {
            name: 'Config',
            alias: [
              path.resolve(__dirname, 'src/config/'),
              path.resolve(__dirname, '../lesgo-framework/src/config/'),
              path.resolve(__dirname, 'node_modules/lesgo/src/config/'),
            ],
          },
          {
            name: 'Constants',
            alias: [
              path.resolve(__dirname, 'src/constants/'),
              path.resolve(__dirname, '../lesgo-framework/src/constants/'),
              path.resolve(__dirname, 'node_modules/lesgo/src/constants/'),
            ],
          },
          {
            name: 'Core',
            alias: [
              path.resolve(__dirname, 'src/core/'),
              path.resolve(__dirname, '../lesgo-framework/src/core/'),
              path.resolve(__dirname, 'node_modules/lesgo/src/core/'),
            ],
          },
          {
            name: 'Exceptions',
            alias: [
              path.resolve(__dirname, 'src/exceptions/'),
              path.resolve(__dirname, '../lesgo-framework/src/exceptions/'),
              path.resolve(__dirname, 'node_modules/lesgo/src/exceptions/'),
            ],
          },
          {
            name: 'Handlers',
            alias: [
              path.resolve(__dirname, 'src/handlers/'),
              path.resolve(__dirname, '../lesgo-framework/src/handlers/'),
              path.resolve(__dirname, 'node_modules/lesgo/src/handlers/'),
            ],
          },
          {
            name: 'Middlewares',
            alias: [
              path.resolve(__dirname, 'src/middlewares/'),
              path.resolve(__dirname, '../lesgo-framework/src/middlewares'),
              path.resolve(__dirname, 'node_modules/lesgo/src/middlewares'),
            ],
          },
          {
            name: 'Models',
            alias: [
              path.resolve(__dirname, 'src/models/'),
              path.resolve(__dirname, '../lesgo-framework/src/models/'),
              path.resolve(__dirname, 'node_modules/lesgo/src/models/'),
            ],
          },
          {
            name: 'Services',
            alias: [
              path.resolve(__dirname, 'src/services/'),
              path.resolve(__dirname, '../lesgo-framework/src/services/'),
              path.resolve(__dirname, 'node_modules/lesgo/src/services/'),
            ],
          },
          {
            name: 'Utils',
            alias: [
              path.resolve(__dirname, 'src/utils/'),
              path.resolve(__dirname, '../lesgo-framework/src/utils/'),
              path.resolve(__dirname, 'node_modules/lesgo/src/utils/'),
            ],
          },
          {
            name: 'Commands',
            alias: [
              path.resolve(__dirname, 'src/commands/'),
              path.resolve(__dirname, '../lesgo-framework/src/commands/'),
              path.resolve(__dirname, 'node_modules/lesgo/src/commands/'),
            ],
          },
        ],
        'resolve'
      ),
    ],
  },
};
