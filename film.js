

export function render(data) {

  console.log(data);

  let container = document.createElement('div')
  container.classList.add('container', 'd-flex', 'flex-wrap', 'justify-content-between', 'gap-5', 'py-5')

  let episodeCard = document.createElement('div')
  episodeCard.classList.add('card')
  episodeCard.style.width = '100%'

  let cardBody = document.createElement('div')
  cardBody.classList.add('card-body')

  let cardTitle = document.createElement('h1')
  cardTitle.classList.add('card-title', 'mb-3')
  cardTitle.textContent = data.title


  let episodeNumber = document.createElement('h3')
  episodeNumber.classList.add('card-subtitle', 'mb-2', 'text-body-secondary')
  episodeNumber.textContent = `Episode: ${data.episode_id}`

  let cardSubtitle = document.createElement('h4')
  cardSubtitle.classList.add('card-subtitle', 'mb-2', 'text-body-secondary')
  cardSubtitle.textContent = `Director: ${data.director}`

  let cardText = document.createElement('p')
  cardText.classList.add('card-text')
  cardText.textContent = data.opening_crawl

  let backLink = document.createElement('a')
  backLink.classList.add('btn', 'btn-primary')
  backLink.textContent = 'Back to episodes'
  backLink.setAttribute('onClick', 'window.history.go(-1); return false')

  cardBody.append(cardTitle)
  cardBody.append(episodeNumber)
  cardBody.append(cardSubtitle)
  cardBody.append(cardText)
  cardBody.append(backLink)

  episodeCard.append(cardBody)

  container.append(episodeCard)

  return container
}