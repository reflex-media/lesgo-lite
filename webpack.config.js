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
        test: /\.ts$/, // include .ts files
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
  externals: ['cardinal', /^@aws-sdk\/.*/],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new AliasPlugin(
        'described-resolve',
        [
          {
            name: 'config',
            alias: [path.resolve(__dirname, 'src/config/')],
          },
          {
            name: 'constants',
            alias: [path.resolve(__dirname, 'src/constants/')],
          },
          {
            name: 'core',
            alias: [path.resolve(__dirname, 'src/core/')],
          },
          {
            name: 'exceptions',
            alias: [path.resolve(__dirname, 'src/exceptions/')],
          },
          {
            name: 'handlers',
            alias: [path.resolve(__dirname, 'src/handlers/')],
          },
          {
            name: 'middlewares',
            alias: [path.resolve(__dirname, 'src/middlewares/')],
          },
          {
            name: 'models',
            alias: [path.resolve(__dirname, 'src/models/')],
          },
          {
            name: 'services',
            alias: [path.resolve(__dirname, 'src/services/')],
          },
          {
            name: 'types',
            alias: [path.resolve(__dirname, 'src/types/')],
          },
          {
            name: 'utils',
            alias: [path.resolve(__dirname, 'src/utils/')],
          },
          {
            name: 'lesgo/exceptions',
            alias: [
              path.resolve(__dirname, 'node_modules/lesgo/src/exceptions/'),
            ],
          },
          {
            name: 'lesgo/middlewares',
            alias: [
              path.resolve(__dirname, 'node_modules/lesgo/src/middlewares/'),
            ],
          },
          {
            name: 'lesgo/services',
            alias: [
              path.resolve(__dirname, 'node_modules/lesgo/src/services/'),
            ],
          },
          {
            name: 'lesgo/utils',
            alias: [path.resolve(__dirname, 'node_modules/lesgo/src/utils/')],
          },
        ],
        'resolve'
      ),
    ],
  },
};
