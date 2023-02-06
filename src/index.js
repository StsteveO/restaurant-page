import "./style.css";
// import Icon from "./icon.png";



console.log("Hello World!");

function intro(){
  const element = document.createElement("div");
  element.innerHTML = "Hello World!";
  element.classList.add("hello");

  // Add the image to our existing div.
//   const myIcon = new Image();
//   myIcon.src = Icon;

//   element.appendChild(myIcon);

  return element;
}

document.body.appendChild(intro());