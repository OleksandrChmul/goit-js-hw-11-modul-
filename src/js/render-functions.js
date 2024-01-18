import { refs } from './refs';

export function renderGalleryList(hits) {
  const markup = hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-list-item">
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}">
        <div class="gallery-info">
          <p>Likes: ${likes}</p>
          <p>Views: ${views}</p>
          <p>Comments: ${comments}</p>
          <p>Downloads: ${downloads}</p>
        </div>
      </a>
    </li>`
    )
    .join('');
  refs.galleryList.insertAdjacentHTML('beforeend', markup);
}

export function clearGalleryList() {
  refs.galleryList.innerHTML = '';
}
