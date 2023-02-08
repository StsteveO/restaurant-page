import "./style.css";
import ItemCreation from "./addToDOM"; // title, content;
import doc from "./docStructure"; // doc.header, main, or footer;
// import Icon from "./icon.png";
// to run= npx webpack;

const headerFooterContent = (() => {
  doc.header.textContent = "Restaurant Page!";
  doc.footer.textContent = "Thank you for Playing";
})();

const menuItem = (() => {
  const pizza = new ItemCreation(
    "Pizza", 
    "Lori's favorite food");
  const cheeseBurger = new ItemCreation(
    "Cheese Burger",
    "Steve's favorite food"
  );
  const hotDog = new ItemCreation(
    "Hot Dog",
    "Food that Steve likes, and Lori tolerates...but Steve really likes it"
  );
  const tacos = new ItemCreation(
    "Taco's",
    "Both Steve and Lori wished they had these right now"
  );
  return { pizza, cheeseBurger, hotDog, tacos };
})();

const menuPage = (() => {
  menuItem.pizza.addToDOM();
  menuItem.cheeseBurger.addToDOM();
  menuItem.hotDog.addToDOM();
  menuItem.tacos.addToDOM();
})();
