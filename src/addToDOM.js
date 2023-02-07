const doc = (() => {
  const header = document.createElement("div");
  header.classList.add("header");
  document.body.appendChild(header);

  const main = document.createElement("div");
  main.classList.add("main");
  document.body.appendChild(main);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  document.body.appendChild(footer);

  return { header, main, footer };
})();

class ItemCreation {
  constructor(title, content) {
    this.title = title;
    this.content = content;
  }

  addToDOM() {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    (doc.main).appendChild(itemContainer);

    const itemTitle = document.createElement("div");
    itemTitle.classList.add("item-title");
    itemTitle.innerHTML = `${this.title}`;
    itemContainer.appendChild(itemTitle);

    const itemContent = document.createElement("div");
    itemContent.classList.add("item-content");
    itemContent.innerHTML = `${this.content}`;
    itemTitle.appendChild(itemContent);
  }
}

export default ItemCreation;
export {doc};


// class ItemCreation{
//     constructor(title, element, cssClass, content){
//         this.title= title;
//         this.element= element;
//         this.cssClass= cssClass;
//         this.content= content;
//     };

//     addToDOM(){
//         const itemContainer= document.createElement("div");
//         itemContainer.classList.add("item-container");
//         document.body.appendChild(itemContainer);

//         const itemTitle= document.createElement(`${this.element}`);
//         itemTitle.classList.add(`${this.cssClass}`);
//         itemTitle.innerHTML = `${this.title}`;
//         itemContainer.appendChild(itemTitle);

//         const itemContent = document.createElement(`${this.element}`);
//         itemContent.classList.add(`${this.cssClass}`);
//         itemContent.innerHTML = `${this.content}`;
//         itemTitle.appendChild(itemContent);
//     }
// }

// export default ItemCreation;
