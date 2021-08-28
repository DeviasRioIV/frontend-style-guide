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
    static             : path.resolve(__dirname, 'dist')
  },

  entry: {
    scripts: ['./src/index.js'],
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

        test: /\.less|\.css$/,

        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bootcamp/dist/public/default/img/login/account-sign/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(otf|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader?limit=100000'
          }
        ]
      }
    ]
  },

  plugins: [
    browserSync
  ]
};