import "./style.css";
import ItemCreation from "./addToDOM"; // title, content;
import doc from "./docStructure"; // doc.header, main, or footer;
// import Icon from "./icon.png";
// to run= npx webpack;

const headerFooterContent = (() => {
  doc.header.textContent = "Odin's Comfort Cafe!";
  doc.footer.textContent = "See you soon!";
})();

const menuItem = (() => {
  const pizza = new ItemCreation(
    "Proper Pizza", 
    "When you need something greasy and HOT!");
  const cheeseBurger = new ItemCreation(
    "Cheesy Cheese Burger",
    "The best thing on the menu. Make sure to get the fries."
  );
  const hotDog = new ItemCreation(
    "'Hott' Hot Dog",
    "A quick bite, to cure your hunger."
  );
  const tacos = new ItemCreation(
    "Terrific Taco's",
    "When you are starving, and have time to sit down."
  );
  const burrito= new ItemCreation(
    "Busting Burrito",
    "Try not to eat the whole thing at once."
  );
  const fries= new ItemCreation(
    "Ferocious Fries",
    "This food doesnt need an explanation. Pairs well with anything on the menu...even burritos."
  )
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
