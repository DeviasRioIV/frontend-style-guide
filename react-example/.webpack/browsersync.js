// External modules
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = new BrowserSyncPlugin({

  host  : 'localhost',

  port  : 8000,

  proxy : 'localhost:3000',

  open  : false,

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