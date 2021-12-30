const form = document.querySelector('.js-form')
const resultContainer = document.querySelector('.js-result-container')
const result = resultContainer.querySelector('.js-result')

/**
 * @param event {SubmitEvent}
 */
const handleSubmit = event => {
  event.preventDefault()

  const formData = new FormData(event.target)
  const { first, second } = Object.fromEntries(formData)

  resultContainer.classList.remove('hidden')
  result.innerHTML = `${+first + +second}`
}

form.addEventListener('submit', handleSubmit)
