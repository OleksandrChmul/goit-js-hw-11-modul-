import { refs } from './refs';

export function hideLoader() {
  refs.loader.classList.add('hide');
}
export function showLoader() {
  refs.loader.classList.remove('hide');
}
