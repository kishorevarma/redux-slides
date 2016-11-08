var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  devtool: '#source-map',
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/only-dev-server',
      './javascript/index'
    ],
    vendor: [
      'whatwg-fetch'
    ],
    react: [
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'react-router',
      'redux-actions',
      'redux-promise-middleware',
      'reselect',
      'type-to-reducer'
    ]
  },
  output: {
    path: path.join(__dirname, 'web'),
    pathinfo: true,
    filename: '[name]_[hash].js',
    chunkFilename: '[name]_[hash].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['react', 'vendor'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      template: 'assets/template.html',
      chunksSortMode: 'dependency'
    }),
    new DashboardPlugin()
  ],
  devServer: {
    hot: true,
    quiet: true,
    historyApiFallback: {
      index: '/'
    },
    contentBase: 'web',
    publicPath: '/',
    stats: {
      colors: true
    },
    proxy: {
      '/api/': {
        target: 'http://localhost:3000/'
      }
    },
    noInfo: false
  },
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx'],
    alias: {
      components: 'src/components'
    },
    modulesDirectories: ['node_modules']
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],
    loaders: [
      // don't remove exclude, there is some issue with babel 6
      {
        test: /\.js$/,
        loaders: [
          'react-hot',
          'babel'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css',
          'postcss'
        ],
      },
      {
        test: /\.scss$/,
        include: [/globalStyles/],
        exclude: [/javascript/],
        loaders: [
          'style',
          'css',
          'sass'
        ],
      },
      {
        test: /\.scss$/,
        exclude: [/globalStyles/],
        loaders: [
          'style',
          'css?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass'
        ],
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
        loader: 'file'
      }
    ]
  },
  postcss: [autoprefixer],
  eslint: {
    fix: true
  }
};
