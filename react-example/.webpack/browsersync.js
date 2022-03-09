// External modules
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Internal modules
const config = require("../src/config-sample.json");

module.exports = new BrowserSyncPlugin({

  host  : 'localhost',

  port  : 8007,

  proxy: 'localhost:3000',

  tunnel: true,

  open  : config.browserSync.open,

  files : [{

    match: [
      './src/**/*.jsx',
      './src/**/*.scss',
      './src/**/*.jpg',
    ],

    server: {
      baseDir: ['react-example/dist']
    },

    fn: (event, file) => {
      if (event === "change") {
        const bs = require('browser-sync').get('bs-webpack-plugin');
        bs.reload();
      }
    }
  }]
});