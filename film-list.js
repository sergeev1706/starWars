
export function render(data) {

  console.log(data.results);
  let asd = data.results


  let container = document.createElement('div')
  container.classList.add('container', 'd-flex', 'flex-wrap', 'justify-content-between', 'gap-5', 'pt-5', 'pb-5')

  for (const episode of asd) {

    let episodeCard = document.createElement('div')
    episodeCard.classList.add('card')
    episodeCard.style.width = '30%'

    let cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    let cardTitle = document.createElement('h4')
    cardTitle.classList.add('card-title', 'mb-3')
    cardTitle.textContent = episode.title

    let episodeNumber = document.createElement('h6')
    episodeNumber.classList.add('card-subtitle', 'mb-2', 'text-body-secondary')
    episodeNumber.textContent = `Episode: ${episode.episode_id}`

    let cardSubtitle = document.createElement('h6')
    cardSubtitle.classList.add('card-subtitle', 'mb-2', 'text-body-secondary')
    cardSubtitle.textContent = `Director: ${episode.director}`

    let cardText = document.createElement('p')
    cardText.classList.add('card-text')
    cardText.textContent = episode.opening_crawl

    let cardLink = document.createElement('a')
    cardLink.classList.add('card-link')
    cardLink.textContent = 'more about the film'

    cardBody.append(cardTitle)
    cardBody.append(episodeNumber)
    cardBody.append(cardSubtitle)
    cardBody.append(cardText)
    cardBody.append(cardLink)

    episodeCard.append(cardBody)

    container.append(episodeCard)
  }
  return container
}

