import createHtmlElement from './modules/util';
import loadHome from './modules/home-page';
import loadMenu from './modules/menu-page';
import loadAbout from './modules/about-page';

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

    // Scrolling Animation for Header
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) $header.classList.add('scroll');
      else if ($header.classList.contains('scroll')) $header.classList.remove('scroll');
    })

    //Make home 'active'
    $links.firstElementChild.classList.add('active');
    return $header;
  }

  const createFooter = () => {
    const $footer = document.createElement('footer');
    $footer.appendChild(createHtmlElement('div', ['footer-text'], 'Created by Sahaj-jj'));
    return $footer;
  }

  function navigate() {
    this.classList.add('active');
    while(content.childElementCount > 1) content.lastChild.remove();
    switch(this.textContent) {
      case 'Home':
        content.appendChild(loadHome());
        break;
      case 'Menu':
        content.appendChild(loadMenu());
        break;
      case 'About':
        content.appendChild(loadAbout());
        break;
      default:
        content.appendChild(loadMenu());
        break;
    }
    content.append(createFooter());
    window.scrollTo(0, 0);
  }
  

  const init = () => {
    content.appendChild(createHeader());
    content.appendChild(loadHome());
    content.appendChild(createFooter());

    const navbtns = document.querySelectorAll('header li');
    navbtns.forEach(btn => {
      btn.addEventListener('click', () => {
        
        navbtns.forEach(btn => btn.classList.remove('active'));

        navigate.bind(btn)();
      });
    });
  }

  return {
    init,
  };
})();

LoadContent.init();