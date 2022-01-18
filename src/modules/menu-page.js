import createHtmlElement from "./util";

const Item = (name, price, desc) => {
    return { name, price, desc, };
}

const itemWrap = (item, className = null) => {
    const container = createHtmlElement('div', ['item', className]);
    container.appendChild(createHtmlElement('div', ['name'], item.name));
    container.appendChild(createHtmlElement('div', ['price'], item.price));
    container.appendChild(createHtmlElement('div', ['desc'], item.desc));
    return container;
}

const loadMenu = () => {

    const itemArray = [
        Item("Perfect Soup", "$2.45", "with pecan ‘épicé’ & passe crassane pear"),
        Item("Great food", "$5.45", "sunny side up egg on breaded pork chops"),
        Item("Exquisite Steak", "$5.45", "with truffles & hollandaise"),
        Item("Sweet Dessert", "$3.27", "with beef stew, pickle, cream"),
        Item("Best Salad", "$8.71", "with black truffles"),
        Item("Classy Dish", "$9.25", "with cranberry and pineapple"),
    ];
    
    const itemContainer = createHtmlElement('div', ['item-container']);
    let itemIndex  = 0;
    itemArray.forEach(item => itemContainer.appendChild(itemWrap(item, `index-${itemIndex++}`)));
    
    const menuContainer = createHtmlElement('div', ['menu-container']);
    menuContainer.appendChild(itemContainer);

    return menuContainer;
}

export default loadMenu;