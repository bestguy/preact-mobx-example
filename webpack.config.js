const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    path.resolve(__dirname, './src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'html-loader' },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-1', 'stage-2'],
          plugins: [['transform-react-jsx'],
            'transform-decorators-legacy']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  ],
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    }
  }
};

