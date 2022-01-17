import createHtmlElement from './modules/util';
import loadHome from './modules/home-page';
import loadMenu from './modules/menu-page';

const LoadContent = (() => {
  const content = document.getElementById('content');

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

  function navigate() {
    content.lastChild.remove();
    switch(this.textContent) {
      case 'Home':
        content.appendChild(loadHome());
        break;
      case 'Menu':
        content.appendChild(loadMenu());
        break;
      // case 'About':
      //   content.appendChild(loadAbout());
      //   break;
    }
  }
  

  const init = () => {
    content.appendChild(createHeader());
    content.appendChild(loadHome());

    const navbtns = document.querySelectorAll('header li');
    navbtns.forEach(btn => btn.addEventListener('click', navigate));
  }

  return {
    init,
  };
})();

LoadContent.init();