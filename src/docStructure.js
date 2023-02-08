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

export default doc;
