export default function bootstrapService(apiKey) {

  const requestOptions = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  };

  return fetch(`bootstrap`, requestOptions)
    .then(response => response.json())
    .then(response => response)
    .catch(error => ({ success: false }));
}