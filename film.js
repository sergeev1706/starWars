

export function render(data) {

  console.log(data);

  let container = document.createElement('div')

  let title = document.createElement('h1')
  title.textContent = data.title




  let btn = document.createElement('button')
  btn.setAttribute('onClick', 'window.history.go(-1); return false')
  btn.textContent = 'Вернуться к списку эпизодов'

  container.append(title)
  container.append(btn)

  return container
}