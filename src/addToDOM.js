import doc from "./docStructure"; // doc.header, main, or footer;
// import Icon from "./icon.png";

class ItemCreation {
  constructor(pic, title, content) {
    this.pic= pic;
    this.title = title;
    this.content = content;
  }

  addToDOM() {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    doc.main.appendChild(itemContainer);

    itemContainer.appendChild(this.pic);
    (this.pic).classList.add("picture");

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
