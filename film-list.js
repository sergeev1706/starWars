
import { createElem } from "./helpers.js"

export function render(data) {

  const container = createElem('div', ['container', 'd-flex', 'flex-wrap', 'justify-content-between', 'gap-5', 'py-5']);
  for (const episode of data.results) {

    const episodeCard = createElem('div', ['card']);
    episodeCard.style.width = '30%';
    const cardBody = createElem('div', ['card-body']);
    const cardTitle = createElem('h4', ['card-title', 'mb-3'], episode.title);
    const episodeNumber = createElem('h6', ['card-subtitle', 'mb-2', 'text-body-secondary'], `Episode: ${episode.episode_id}`);
    const cardSubtitle = createElem('h6', ['card-subtitle', 'mb-2', 'text-body-secondary'], `Director: ${episode.director}`);
    const cardText = createElem('p', ['card-text'], episode.opening_crawl);
    const cardLink = createElem('a', ['btn', 'btn-primary'], 'more about the film');

    let param = episode.url.split('/').filter(e => Number(e))[0];
    cardLink.href = `?films/${param}`;

    cardBody.append(cardTitle);
    cardBody.append(episodeNumber);
    cardBody.append(cardSubtitle);
    cardBody.append(cardText);
    cardBody.append(cardLink);
    episodeCard.append(cardBody);
    container.append(episodeCard);
  }
  return container;
}