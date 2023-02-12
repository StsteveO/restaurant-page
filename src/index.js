import "./style.css";
import ItemCreation from "./addToDOM"; // title, content;
import doc from "./docStructure"; // doc.header, main, or footer;
import btnClickLogic from "./btn-click-logic";

import pizzaPicFile from "./imgs/pizza--kelvin-t-unsplash.jpg";
import cheeseBurgerPicFile from "./imgs/cheeseBurger--amirali-mirhashemian-unsplash.jpg";
import hotdogPicFile from "./imgs/hotdog2--andersen-jensen-unsplash.jpg";
import tacoPicFile from "./imgs/tacos--tai-s-captures-unsplash.jpg";
import burritoPicFile from "./imgs/burrito2--kashish-lamba-unsplash.jpg";
import friesPicFile from "./imgs/fries--joyce-panda-unsplash.jpg";
// import Icon from "./icon.png";
// to run= npx webpack;
const headerFooterContent = (() => {
  doc.header.textContent = "Odin's Comfort Cafe!";
  doc.footer.textContent = "See you soon!";
})();

const pic = (() => {
  const pizza = new Image();
  pizza.src = pizzaPicFile;
  const cheeseBurger = new Image();
  cheeseBurger.src = cheeseBurgerPicFile;
  const hotdog = new Image();
  hotdog.src = hotdogPicFile;
  const taco = new Image();
  taco.src = tacoPicFile;
  const burrito = new Image();
  burrito.src = burritoPicFile;
  const fries = new Image();
  fries.src = friesPicFile;

  return{pizza, cheeseBurger, hotdog, taco, burrito, fries};
})();

const menuItem = (() => {
  const pizza = new ItemCreation(
    pic.pizza,
    "Proper Pizza...$12",
    "When you need something greasy and HOT!"
  );
  const cheeseBurger = new ItemCreation(
    pic.cheeseBurger,
    "Cheesy Cheese Burger...$10",
    "The best thing on the menu. Make sure to get the fries."
  );
  const hotDog = new ItemCreation(
    pic.hotdog,
    "'Hott' Hot Dog...$7.99",
    "A quick bite, to cure your hunger. Great for on-the-go!"
  );
  const tacos = new ItemCreation(
    pic.taco,
    "Terrific Taco's...$7.99",
    "When you are starving, and have time to sit down, and don't care about getting messy."
  );
  const burrito = new ItemCreation(
    pic.burrito,
    "Busting Burrito...$12.99",
    "Try not to eat the whole thing at once. If you have time to sit down, this is a must-try!"
  );
  const fries = new ItemCreation(
    pic.fries,
    "Ferocious Fries...$3.99",
    "This food doesnt need an explanation. Pairs well with anything on the menu...even burritos."
  );
  return { pizza, cheeseBurger, hotDog, tacos, burrito, fries };
})();

const menuPage = (() => {
  menuItem.pizza.addToDOM();
  menuItem.cheeseBurger.addToDOM();
  menuItem.hotDog.addToDOM();
  menuItem.tacos.addToDOM();
  menuItem.burrito.addToDOM();
  menuItem.fries.addToDOM();
})();

console.log("hello world");


