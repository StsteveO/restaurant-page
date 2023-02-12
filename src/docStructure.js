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

  const navContainer= document.createElement("div");
  navContainer.classList.add("nav-container");
  headerContainer.appendChild(navContainer);

  const btnHome= document.createElement("button");
  btnHome.classList.add("btn-home");
  btnHome.textContent="Home";
  navContainer.appendChild(btnHome);

  const btnMenu = document.createElement("button");
  btnMenu.classList.add("btn-menu");
  btnMenu.textContent = "Menu";
  navContainer.appendChild(btnMenu);

  const btnContactUs = document.createElement("button");
  btnContactUs.classList.add("btn-contact-us");
  btnContactUs.textContent = "Contact Us";
  navContainer.appendChild(btnContactUs);

  const main = document.createElement("div");
  main.classList.add("main");
  pageContainer.appendChild(main);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  pageContainer.appendChild(footer);

  return { headerContainer, header, navContainer, btnHome, btnMenu, btnContactUs, main, footer };
})();

export default doc;
