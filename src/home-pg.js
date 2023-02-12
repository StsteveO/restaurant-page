import doc from "./docStructure"; // doc.header, main, or footer;
import mainPgPicFile from "./imgs/mainPg--jason-leung-unsplash.jpg";

const pic=(()=>{
    const mainPg= new Image();
    mainPg.src= mainPgPicFile;
    return {mainPg}
})();

const homePg=(()=>{
    const container = document.createElement("div");
    container.classList.add("hide");
    container.classList.add("item-container");
    container.classList.add("updated-container");
    // container.textContent = "This is the Home Page";
    // container.style.cssText = "color:white; font-size: 3rem;";
    doc.main.appendChild(container);

    pic.mainPg.classList.add("main-page-picture");
    container.appendChild(pic.mainPg);

    const title = document.createElement("div");
    title.classList.add("item-title");
    title.innerHTML = "Welcome to Odin Cafe!";
    container.appendChild(title);

    const content = document.createElement("div");
    content.classList.add("item-content");
    content.innerHTML = "Your Next Best Meal is Right around the Corner!";
    title.appendChild(content);

    return{container};
})();
export default homePg;