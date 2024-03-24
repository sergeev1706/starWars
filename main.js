const cssPromises = {};
const bootstrapCSS = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css'

function loadResource(src) {

  if (src.endsWith('.js')) {
    return import(src);
  }

  if (src.endsWith('.css')) {

    if (!cssPromises[src]) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = src;
      document.head.append(link);
      cssPromises[src] = new Promise(resolve => {
        link.addEventListener('load', () => resolve());
      })
    }
    return cssPromises[src];
  }
  return fetch(src).then(res => res.json());
}

export const appContainer = document.querySelector('#app');

const paramsString = location.search.replace('/', '=');
const searchParams = new URLSearchParams(paramsString);

let filmPath;
for (const param of searchParams) filmPath = param.join('/');

if (filmPath) {
  renderPage(
    './film.js',
    `https://swapi.dev/api/${filmPath}`,
    bootstrapCSS,
  )
} else {
  renderPage(
    './film-list.js',
    'https://swapi.dev/api/films',
    bootstrapCSS,
  )
}

function renderPage(moduleName, apiUrl, css) {
  Promise.all([moduleName, apiUrl, css].map(src => loadResource(src)))
    .then(([pageModule, data]) => {
      if (data.planets) {
        Promise.all([...data.planets, ' ', ...data.species].map(e => e !== ' ' ? fetch(e).then(e => e.json()) : e))
          .then(prop => appContainer.append(pageModule.render(data, prop)));
      } else {
        appContainer.append(pageModule.render(data));
      }
    })
}
