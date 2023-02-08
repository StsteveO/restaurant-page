const doc = (() => {
  const pageContainer = document.createElement("div"); 
  pageContainer.classList.add("page-container");
  document.body.appendChild(pageContainer);

  const header = document.createElement("div");
  header.classList.add("header");
  pageContainer.appendChild(header);

  const main = document.createElement("div");
  main.classList.add("main");
  pageContainer.appendChild(main);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  pageContainer.appendChild(footer);

  return { header, main, footer };
})();

export default doc;
