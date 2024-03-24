

// функция создания HTML элемента
// (название элемента, массив классов элемента, текст элемента )
export function createElem(elem, classList, textContent) {

  let element = document.createElement(elem);
  textContent ? element.textContent = textContent : '';

  if (classList.length > 0) {
    for (const className of classList) {
      element.classList.add(className);
    }
  }
  return element;
}

