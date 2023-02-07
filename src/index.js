import "./style.css";
import ItemCreation, {doc} from "./addToDOM"; // title, content && doc.header;
// import Icon from "./icon.png";
// to run= npx webpack;

const headerFooterContent=(()=>{
(doc.header).textContent="Restaurant Page!";
(doc.footer).textContent="Thank you for Playing";
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
  const tacos= new ItemCreation(
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
//   return {};
})();


// console.log("Hello World!!!");
// function intro(){
//   const element = document.createElement("div");
//   element.innerHTML = "Hello World!!!";
//   element.classList.add("hello");

// // Add the image to our existing div.
// //   const myIcon = new Image();
// //   myIcon.src = Icon;

// //   element.appendChild(myIcon);

//   return element;
// }

// document.body.appendChild(intro());
