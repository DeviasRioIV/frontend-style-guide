import login from './models/login.json'

export default function Mock () {

  window.fetch = function (url, content) {

    console.log(url, content)

    // Switch endpoint
    switch (url) {

      case 'login':
        return promise(login, content)

      default:
        // pass through any requests not handled above
        return fetch(url, content).then(response => resolve(response))
    }
  }

  function promise (model, content) {

    return new Promise((resolve, reject) => {

      // Declare response
      const response = {
        ok: false
      }

      // Get payload from request, use them to resolve/throw errors
      const payload = content.body

      if (content.method === 'GET' || payload) {

        // Declare response
        response.ok = true
        response.body = model

      }

      // Make sure response is good
      if (response.ok) {

        // Resolve
        setTimeout(() => {
          resolve({ ok: true, json: () => resolve(response.body) })
        }, 1500)

      } else {

        // Throw error
        const error = new Error('Request was not good')
        return reject(error)
      }
    })
  }
}
