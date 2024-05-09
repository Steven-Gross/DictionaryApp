document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + choice

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = choice
      document.querySelector('h3').innerText = data[0].meanings[0].definitions[0].definition
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}