import '../../scss/main.scss';
import footerDate from './footerDate';

function loadModule(module) {
  import(`./${module}`).then(({default: defaultFn}) => {
    return defaultFn();
  })
}

window.addEventListener('load', () => {
  Promise.resolve()
    .then(() => footerDate())
    .then(() => loadModule('lazyLoad'))
});