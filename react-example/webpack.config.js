// External modules
const path    = require('path')
const process = require('process')
const fs      = require('fs')

// Store Process ID
try {

  // Store PID to be killed
  const pid = `${process.pid}`

  fs.writeFile('./.webpack/process-id', pid, function (err) {
    if (err) throw err
    console.log('\x1b[91m%s\x1b[0m', 'Process Id Saved \n')
  })

} catch (e) {}

// Internal modules
const browserSync = require('./.webpack/browsersync.js')

module.exports = {

  devtool: 'source-map',

  watchOptions: {
    ignored: ['node_modules/**']
  },

  devServer: {
    compress: true,
    port: 3000,
    historyApiFallback: true,
    static: path.resolve(__dirname, 'dist')
  },

  entry: {
    scripts: ['./src/index.js']
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'scripts.min.js'
  },

  module: {

    rules: [
      {

        test: /\.jsx?$/,

        include: [
          path.resolve(__dirname, 'src')
        ],

        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],

        loader: 'babel-loader',

        options: {
          presets: ['@babel/preset-env', '@babel/react']
        },

        type: 'javascript/auto'
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
              name: 'bootcamp/dist/public/default/img/login/account-sign/[name].[ext]'
            }
          }
        ]
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
      Less: path.resolve(__dirname, 'src/Less/'),
      Router: path.resolve(__dirname, 'src/Router/')
    },
    extensions: ['.js', '.jsx', '.less', '...']
  },

  plugins: [
    browserSync
  ]
}
