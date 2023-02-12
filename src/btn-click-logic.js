import doc from "./docStructure"; // doc.header, main, or footer;
import ItemCreation from "./addToDOM"; // title, content;


const btnClickLogic=(()=>{
    doc.btnHome.addEventListener("click", ()=>{
        const menuContainer = document.querySelectorAll(".item-container");
        menuContainer.forEach(menuItem=>menuItem.classList.add("hide"));

        const txt= document.createElement("div");
        txt.textContent="Hello World!";
        txt.style.cssText = "color:white;";
        doc.main.appendChild(txt);
        // this is a test example...build home pg, and contact pg on here and you are done!
    });

    doc.btnMenu.addEventListener("click", ()=>{
        const menuContainer = document.querySelectorAll(".item-container");
        menuContainer.forEach(menuItem=>menuItem.classList.remove("hide"));
    });

    doc.btnContactUs.addEventListener("click", () => {
      const menuContainer = document.querySelectorAll(".item-container");
      menuContainer.forEach((menuItem) => menuItem.classList.add("hide"));
    });
})();
export default btnClickLogic;