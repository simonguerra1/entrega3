import './style.css'
import {
  printItems,
  galleryTemplate,
  galleryListeners,
  searchPhotos
} from './src/components/gallery/gallery'

const headerTemplate = () => {
  return `
  <a href="http://localhost:5173/" id="logo">
  <img src="https://res.cloudinary.com/dzviuc0zj/image/upload/v1712866571/Mis%20imagenes/Pinterest-logo_awlvn5.png" class="logo">
</a>
  
  
  <nav id="header-nav">
    <a href="#">Today</a>
    <a href="#">Explorar</a>
  </nav>
  <input type="text" id="searchinput" placeholder="Search for photos">
<button id="searchbtn">Search</button>

  <div id="user-area">
    <a href="#"><img src="https://res.cloudinary.com/dzviuc0zj/image/upload/v1712867666/Mis%20imagenes/31278_nyydla.png" alt="Notifications" class="icon"></a>
    <a href="#"><img src="https://res.cloudinary.com/dzviuc0zj/image/upload/v1716830025/1_yziyxp.png" alt="Profile" class="icon"></a>
    <a href="#"><img src="https://res.cloudinary.com/dzviuc0zj/image/upload/v1717353983/nav-bar_acntbm.png" alt="menu" class="menu-icon"></a>
  </div>`
}
const printHeader = () => {
  const app = document.querySelector('#app')
  const headerElement = document.createElement('header')
  headerElement.innerHTML = headerTemplate()
  app.appendChild(headerElement)
}
printHeader()

const main = document.createElement('main')
const app = document.querySelector('#app')
app.appendChild(main)

const printTemplate = async () => {
  document.querySelector('main').innerHTML = galleryTemplate()
  galleryListeners()

  const images = await searchPhotos('moon')
  printItems(images)
}

printTemplate()
