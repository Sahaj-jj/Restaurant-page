import createHtmlElement from "./util";

const loadHome = () => {
    const homeContainer = createHtmlElement('div', ['home-container']);

    const bg = createHtmlElement('div', ['bg']);

    let headingText = 'Finest cuisine';
    const heading = createHtmlElement('div', ['heading', 'text'], headingText);

    homeContainer.appendChild(bg);
    homeContainer.appendChild(heading);

    return homeContainer;
};

export default loadHome;