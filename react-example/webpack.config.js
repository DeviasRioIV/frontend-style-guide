// External modules
const path = require("path");

// Internal modules
const browserSync = require("./.webpack/browsersync.js");

module.exports = {

  devtool: 'source-map',

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
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.(png|otf|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },

  resolve: {
    alias: {
      Helpers: path.resolve(__dirname, 'src/Helpers/'),
      Components: path.resolve(__dirname, 'src/Components/'),
      Screens: path.resolve(__dirname, 'src/Screens/'),
      Router: path.resolve(__dirname, 'src/Router/')
    },
    extensions: ['.js', '.jsx', '.less', '...']
  },

  plugins: [
    browserSync
  ]
};