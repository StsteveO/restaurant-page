import doc from "./docStructure"; // doc.header, main, or footer;
import ContactUsPgPicFile from "./imgs/contactUs-pg--jay-wennington-unsplash.jpg";

const pic=(()=>{
    const contactUsPg= new Image();
    contactUsPg.src = ContactUsPgPicFile;
    return {contactUsPg}
})();

const contactUsPg = (() => {
  const container = document.createElement("div");
  container.classList.add("hide");
  doc.main.appendChild(container);

  container.classList.add("item-container");
  container.classList.add("updated-container");
  doc.main.appendChild(container);

  pic.contactUsPg.classList.add("main-page-picture");
  container.appendChild(pic.contactUsPg);

  const title = document.createElement("div");
  title.classList.add("item-title");
  title.innerHTML = "Contact Us Anytime.";
  container.appendChild(title);

  const content = document.createElement("div");
  content.classList.add("item-content");
  content.innerHTML = "We will be waiting for your call.";
  title.appendChild(content);

  return { container };
})();
export default contactUsPg;