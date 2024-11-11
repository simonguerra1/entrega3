import './card.css'

export const cardTemplate = (item) => {
  return `
    <li class="pinterest-card">
      <img
        src="${item.urls.small}"
        alt="${item.alt_description}"
        class="pinterest-image"
      />
      <div class="card-info">
        <div class="card-actions">
          <button class="save-btn">Save</button>
          <button class="like-btn">Like</button>
          <button class="share-btn">Share</button>
        </div>
      </div>
      <div id="small-logos">
        <a href="#">
          <img
            src="https://res.cloudinary.com/dzviuc0zj/image/upload/v1728404717/1_kkwaz2.png"
            alt="Logo 1"
            width="50"
            height="50"
          />
        </a>
        <a href="#">
          <img
            src="https://res.cloudinary.com/dzviuc0zj/image/upload/v1728404717/2_gq7s7q.png"
            alt="Logo 2"
            width="50"
            height="50"
          />
        </a>
        <a href="#">
          <img
            src="https://res.cloudinary.com/dzviuc0zj/image/upload/v1727457073/1_mit1lw.png"
            alt="Logo 3"
            width="50"
            height="50"
          />
        </a>
      </div>
    </li>
  `
}
