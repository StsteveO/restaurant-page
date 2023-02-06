// document.body.appendChild(intro());

class ItemCreation{
    constructor(title, element, cssClass, content){
        this.title= title;
        this.element= element;
        this.cssClass= cssClass;
        this.content= content;
    };

    addToDOM(){
        const itemContainer= document.createElement("div");
        itemContainer.classList.add("item-container");
        document.body.appendChild(itemContainer);

        const itemTitle= document.createElement(`${this.element}`);
        itemTitle.classList.add(`${this.cssClass}`);
        itemTitle.innerHTML = `${this.title}`;
        itemContainer.appendChild(itemTitle);

        const itemContent = document.createElement(`${this.element}`); 
        itemContent.classList.add(`${this.cssClass}`);
        itemContent.innerHTML = `${this.content}`;
        itemTitle.appendChild(itemContent);
    }
}

export default ItemCreation;
