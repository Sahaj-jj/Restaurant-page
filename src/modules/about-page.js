import createHtmlElement from "./util";


const loadAbout = () => {
    
    let headingText = 'Meet our Team';
    let txt =  `We are a family owned restaurant, 
    which treasures the atmosphere just as much as the dining menu.
    We assembled a strong team of professionals, 
    all of whom aspire to constantly excel and step it up!`;

    const textContainer = createHtmlElement('div', ['text-container']);
    textContainer.appendChild(createHtmlElement('h2', ['heading'], headingText));
    textContainer.appendChild(createHtmlElement('div', ['txt'], txt));

    const infoContainer = createHtmlElement('div', ['info-container']);
    let imgSrc = 'https://image.freepik.com/free-photo/happy-young-cook-uniform-holding-salad_171337-5343.jpg';
    infoContainer.appendChild(createHtmlElement('img', null, null, imgSrc));
    infoContainer.appendChild(textContainer);


    const aboutContainer = createHtmlElement('div', ['about-container']);
    aboutContainer.appendChild(infoContainer);
    return aboutContainer;
}

export default loadAbout;