import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { fetchImages } from './pixabayAPI';
import { refs } from './refs';
import { clearGalleryList, renderGalleryList } from './render-functions';
import { lightbox } from './simpleLigthBox';
import { hideLoader, showLoader } from './loader';

export function onSearchFormSubmit(event) {
  event.preventDefault();
  clearGalleryList();
  showLoader();
  const searchQuery = refs.searchForm.elements.searchQuery.value.trim();
  if (!searchQuery) {
    iziToast.info({
      title: 'Info',
      message: 'empty input',
    });
    hideLoader();
    return;
  }

  fetchImages(searchQuery)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }
      renderGalleryList(hits);
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        title: 'Error',
        message: 'something went wrong, try again',
      });
    })
    .finally(() => {
      hideLoader();
    });
}
