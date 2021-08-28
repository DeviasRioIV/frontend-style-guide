// External modules
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

// Internal modules
const config = require("./config.json");

module.exports = new BrowserSyncPlugin({

  host  : 'localhost',

  port  : config.browserSync.port,

  proxy : 'localhost:3000',

  open  : config.browserSync.open,

  files : [{

    match: [
      './src/**/*.jsx',
      './src/**/*.less'
    ],

    server: {
      baseDir : [ "/dist" ]
    },

    fn: (event, file) => {
      if (event === "change") {
        const bs = require('browser-sync').get('bs-webpack-plugin');
        bs.reload();
      }
    }
  }]
});