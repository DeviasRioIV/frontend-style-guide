const fs = require('fs')

try {
  getData()
} catch (e) {}

async function getData () {

  fs.readFile(

    './.webpack/process-id',

    'utf8',

    (err, data) => {

      if (err) {
        throw err
      }

      try {
        process.kill(data, 'SIGKILL')
      } catch (e) {
        console.log('Can\'t find process')
      }

    }
  )
}
