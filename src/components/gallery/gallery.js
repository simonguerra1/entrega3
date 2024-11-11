import './gallery.css'
import { createApi } from 'unsplash-js'
import { cardTemplate } from '../card/card'

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY
})

export const searchPhotos = async (keyword) => {
  try {
    const images = await unsplash.search.getPhotos({
      query: keyword,
      page: 1,
      perPage: 30
    })

    if (images.response.results.length > 0) {
      return images.response.results
    } else {
      showNoResultsMessage()
      return []
    }
  } catch (error) {
    console.error('Error fetching images:', error)
  }
}

const showNoResultsMessage = () => {
  const existingMessage = document.querySelector('.no-results-message')
  if (existingMessage) {
    existingMessage.remove()
  }

  const messageContainer = document.createElement('div')
  messageContainer.classList.add('no-results-message')
  messageContainer.innerHTML = `
    <p>No hay imágenes que coincidan con la búsqueda, prueba con otra palabra!</p>
  `

  const mainContainer = document.querySelector('main')
  mainContainer.appendChild(messageContainer)
}

export const galleryTemplate = () => {
  return `<ul class="gallery">
  </ul>
`
}

export const printItems = (items) => {
  const gallery = document.querySelector('.gallery')
  gallery.innerHTML = ''
  items.forEach((item) => {
    gallery.innerHTML += cardTemplate(item)
  })
}

export const galleryListeners = () => {
  const input = document.querySelector('#searchinput')
  const btn = document.querySelector('#searchbtn')
  btn.addEventListener('click', async () => {
    const images = await searchPhotos(input.value)
    printItems(images)
  })
}
