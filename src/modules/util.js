
const createHtmlElement = (type, classArray = null, content = null, src = null) => {
    const element = document.createElement(type);
    if (classArray) classArray.forEach(className => element.classList.add(className));
    if (content) element.textContent = content;
    if (src) element.src = src;
    return element;
  }

  export default createHtmlElement;