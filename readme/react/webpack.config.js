// External modules
const path = require("path");

// Internal modules
const browserSync = require("./.webpack/browsersync.js");

module.exports = {

  devtool: 'cheap-module-source-map',

  watchOptions: {
    ignored: ["node_modules/**"],
  },

  devServer: {
    compress           : true,
    port               : 3000,
    historyApiFallback : true,
    contentBase        : path.resolve(__dirname, 'dist')
  },

  entry: {
    scripts: ['./src/index.jsx'],
  },

  output: {
    path       : path.resolve(__dirname, './dist'),
    filename   : 'scripts.min.js'
  },

  module: {

    rules: [
      {

        test: /\.jsx?$/,

        include: [
          path.resolve(__dirname, "src")
        ],

        exclude: [
          path.resolve(__dirname, "node_modules")
        ],

        loader: "babel-loader",

        options: {
          presets: ['@babel/preset-env', '@babel/react']
        },

        type: "javascript/auto"
      },
      {

        test: /\.less$/,

        use: ['style-loader', 'css-loader', 'less-loader']
      },
    ]
  },

  plugins: [
    browserSync
  ]
};