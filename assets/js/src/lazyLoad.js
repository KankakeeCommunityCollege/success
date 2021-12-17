const LAZY_IMAGE_LIST = document.querySelectorAll('img[data-src]');
// Lazy load images
// ex. <img data-src="/path/to/image.jpg" alt="">
function lazyLoad() {
  [...LAZY_IMAGE_LIST].forEach((img) => {
    img.src = img.dataset.src;
    img.addEventListener('load', () => {
      img.removeAttribute('data-src');
    });
  });
}

export default lazyLoad;
