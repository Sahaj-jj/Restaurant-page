import createHtmlElement from './modules/util';
import loadHome from './modules/home-page';


const createHeader = () => {
  const linksArray = ['Home', 'Menu', 'About'];
  const $links = document.createElement('ul');
  linksArray.forEach(link => {
    $links.appendChild(createHtmlElement('li', null, link));
  });
  const $header = document.createElement('header');
  $header.appendChild($links);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) $header.classList.add('scroll');
    else if ($header.classList.contains('scroll')) $header.classList.remove('scroll');
  })

  return $header;
}

const loadContent = () => {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(loadHome());
}

loadContent();
