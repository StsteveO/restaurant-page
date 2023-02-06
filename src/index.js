import "./style.css";
import ItemCreation from "./addToDOM"; // varName, element, cssClass, content;
// import Icon from "./icon.png";
// to run= npx webpack;



console.log("Hello World!!!");

function intro(){
  const element = document.createElement("div");
  element.innerHTML = "Hello World!!!";
  element.classList.add("hello");

  // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);

  return element;
}

document.body.appendChild(intro());

const pizza= new ItemCreation("Pizza", "div", "hello", "Lori's favorite food");
console.log(pizza);
pizza.addToDOM();
const cheeseBurger= new ItemCreation("Cheese Burger", "div", "hello", "Steve's favorite food");
cheeseBurger.addToDOM();
const hotDog= new ItemCreation("Hot Dog", "div", "hello", "Food that Steve likes, and Lori tolerates");
hotDog.addToDOM();
