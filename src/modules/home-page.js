import createHtmlElement from "./util";

const loadHome = () => {
    // Background And Heading
    let subHeadingText = 'Authentic Italian Cuisine';
    let headingText = "Bonta'del Forno";
    
    const bgSection = createHtmlElement('div', ['section']);
    bgSection.appendChild(createHtmlElement('h1', ['heading', 'main'], headingText));
    bgSection.appendChild(createHtmlElement('h2', ['heading', 'sub'], subHeadingText));

    // Text Section
    headingText = 'Italian to the Bone!';
    let txt = `Founded by 1st generation of immigrants from Sicily, 
    this Italian restaurant has quickly become a local area staple. 
    With an amazing range of Italian dishes of both classic and modern traditions, 
    starting with pizzas and pastas and all the way to celuccio and annianto, our menu stands out!`;

    const container = createHtmlElement('div', ['container']);
    const textContainer = createHtmlElement('div', ['text-container']);
    const imageContainer = createHtmlElement('div', ['image-container']);

    textContainer.appendChild(createHtmlElement('h2', ['heading', 'text'], headingText));
    textContainer.appendChild(createHtmlElement('div', ['text'], txt));
    imageContainer.appendChild(createHtmlElement('img', null, null, './images/pizza.png'));

    container.appendChild(textContainer);
    container.appendChild(imageContainer);

    window.addEventListener('scroll', () => {
        imageContainer.style.transform = `translateX(${window.scrollY * 0.9}px) rotate(${window.scrollY * 0.5}deg) `;
    })

    // Home Container
    const homeContainer = createHtmlElement('div', ['home-container']);
    homeContainer.appendChild(bgSection);
    homeContainer.appendChild(container);

    return homeContainer;
};

export default loadHome;