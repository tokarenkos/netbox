import { isTruthy, getElements } from './util';

/**
 * Allow any element to be made "clickable" with the use of the `data-href` attribute.
 */
export function initLinks(base?: Element): void {
  for (const link of getElements('*[data-href]', { base })) {
    const href = link.getAttribute('data-href');
    if (isTruthy(href)) {
      link.addEventListener('click', () => {
        window.location.assign(href);
      });
    }
  }
}
