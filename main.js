const cssPromises = {};

function loadResource(src) {

  if (src.endsWith('.js')) {                                         // JavaScript module
    return import(src);                                              // 
  }

  if (src.endsWith('.css')) {                                        // CSS file

    if (!cssPromises[src]) {                                         // если промиса нет
      const link = document.createElement('link');                   // создаю ссылку
      link.rel = 'stylesheet';                                       // 
      link.href = src;                                               // 
      document.head.append(link);                                    // добавляю в DOM
      cssPromises[src] = new Promise(resolve => {                    // заресолвить после события
        link.addEventListener('load', () => resolve());              // загрузки
      })
    }
    return cssPromises[src];                                         // везвращаю промис
  }

  return fetch(src).then(res => res.json());                         // данные с сервера
}

const appContainer = document.querySelector('#app');                 // определяю переменную для APP

const paramsString = location.search.replace('/', '=');
const searchParams = new URLSearchParams(paramsString);

let filmPath
for (const param of searchParams) filmPath = param.join('/')

function renderPage(moduleName, apiUrl, css) {
  Promise.all([moduleName, apiUrl, css,].map(src => loadResource(src)))
    .then(([pageModule, data]) => {
      appContainer.append(pageModule.render(data))
    })
}

if (filmPath) {
  renderPage(
    './film.js',
    `https://swapi.dev/api/${filmPath}`,
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css',
  )
} else {
  renderPage(
    './film-list.js',
    'https://swapi.dev/api/films',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css',
  )
}