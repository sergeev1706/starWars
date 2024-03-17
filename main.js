const cssPromises = {};

function loadResource(src) {
  // JavaScript module
  if (src.endsWith('.js')) {
    return import(src);
  }
  // CSS file
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
  // данные с сервера
  return fetch(src).then(res => res.json());
}

const appContainer = document.querySelector('#app');

Promise.all([
  './film-list.js',
  'https://swapi.dev/api/films',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css',
].map(src => loadResource(src))).then(([pageModule, data]) => {
  // pageModule.render(data)
  appContainer.append(pageModule.render(data))
})

// https://swapi.dev/api/films - init link


