export default async function loginService (body) {

  const requestOptions = {
    mathod: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(body)
  }

  // Default response
  let success = false
  let data = { error: 'There was an issue with your request' }

  const response = await fetch(`login`, requestOptions)

  const json = await response.json()

  if (json.status === 200) {
    success = true
    data = json
  } else if (json.error) {
    data.error = json.error
  }

  return {
    success: success,
    data: data
  }
}
