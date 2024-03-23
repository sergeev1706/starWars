
import { createElem } from "./helpers.js"

export function render(data, planets, species) {

  const container = createElem('div', ['container', 'd-flex', 'flex-wrap', 'justify-content-between', 'gap-5', 'py-5'])
  const episodeCard = createElem('div', 'card')
  episodeCard.style.width = '100%'
  const cardBody = createElem('div', ['card-body'])
  const cardTitle = createElem('h1', ['card-title', 'mb-3'], data.title)
  const episodeNumber = createElem('h3', ['card-subtitle', 'mb-2', 'text-body-secondary'], `Episode: ${data.episode_id}`)
  const cardSubtitle = createElem('h4', ['card-subtitle', 'mb-2', 'text-body-secondary'], `Director: ${data.director}`)
  const cardText = createElem('p', ['card-text'], data.opening_crawl)

  const propertyWrapper = createElem('div', ['d-flex'])
  const planetsWrapper = createElem('div', ['p-4', 'mb-3'])
  planetsWrapper.style.width = '20%'
  const speciesWrapper = createElem('div', ['p-4', 'mb-3'])
  speciesWrapper.style.width = '25%'

  const planetsListTitle = createElem('h3', [], 'Planets')
  const speciesListTitle = createElem('h3', [], 'Species')

  const planetsList = createElem('ul', ['p-0'])
  const speciesList = createElem('ul', ['p-0'])

  planets.forEach(e => {
    const planetItem = createElem('li', ['list-group'], e.name)
    planetsList.append(planetItem)
  })

  species.forEach(e => {
    const specialItem = createElem('li', ['list-group'], e.name)
    speciesList.append(specialItem)
  })

  const backLink = createElem('a', ['btn', 'btn-primary'], 'Back to episodes')
  backLink.setAttribute('onClick', 'window.history.go(-1); return false')

  cardBody.append(cardTitle)
  cardBody.append(episodeNumber)
  cardBody.append(cardSubtitle)
  cardBody.append(cardText)

  cardBody.append(propertyWrapper)
  propertyWrapper.append(planetsWrapper)
  planetsWrapper.append(planetsListTitle)
  planetsWrapper.append(planetsList)

  propertyWrapper.append(speciesWrapper)
  speciesWrapper.append(speciesListTitle)
  speciesWrapper.append(speciesList)

  cardBody.append(backLink)

  episodeCard.append(cardBody)
  container.append(episodeCard)

  return container
}
