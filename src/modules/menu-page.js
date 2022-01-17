import createHtmlElement from "./util";

const loadMenu = () => {
    const el = createHtmlElement('div', ['menu'], 'Hi');
    return el;
}

export default loadMenu;