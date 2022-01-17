import createHtmlElement from "./util";

const loadHome = () => {
    const homeContainer = createHtmlElement('div', ['home-container']);

    const bgSection = createHtmlElement('div', ['section']);

    let subHeadingText = 'Finest Italian Cuisine';
    const subHeading = createHtmlElement('h2', ['heading', 'sub'], subHeadingText);

    let headingText = "Bonta'del Forno";
    const heading = createHtmlElement('h1', ['heading', 'main'], headingText);

    let txt = 'Placeholder';
    const text = createHtmlElement('div', ['text'], txt);

    bgSection.appendChild(heading);
    bgSection.appendChild(subHeading);
    homeContainer.appendChild(bgSection);
    homeContainer.appendChild(text);


    return homeContainer;
};

export default loadHome;