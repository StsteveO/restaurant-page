const doc = (() => {
  const bgImg= document.createElement("div");
  bgImg.classList.add("bg-img");
  document.body.appendChild(bgImg);
  
  const pageContainer = document.createElement("div"); 
  pageContainer.classList.add("page-container");
  document.body.appendChild(pageContainer);

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("header-container");
  pageContainer.appendChild(headerContainer);

  const header = document.createElement("div");
  header.classList.add("header");
  headerContainer.appendChild(header);

  const nav= document.createElement("div");
  nav.classList.add("nav");
  headerContainer.appendChild(nav);

  const main = document.createElement("div");
  main.classList.add("main");
  pageContainer.appendChild(main);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  pageContainer.appendChild(footer);

  return { headerContainer, header, nav, main, footer };
})();

export default doc;
