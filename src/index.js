import "./styles.css";
import makeHome from "./home";
import makeMenu from "./menu";
import makeAbout from "./aboutUs";
import img1 from "./images/burger.jpg";
import img2 from "./images/fries.jpg";
const mainContainer = document.querySelector("#content");
const homeButton = document.querySelector("#homebtn");
const menuButton = document.querySelector("#menubtn");
const aboutButton = document.querySelector("#aboutbtn");

makeHome(mainContainer);

homeButton.addEventListener("click", function () {
    mainContainer.innerHTML = "";
    makeHome(mainContainer);
})

menuButton.addEventListener("click", function () {
    mainContainer.innerHTML = "";
    const cardMaker = makeMenu(mainContainer);
    cardMaker("Burger", "6", img1);
    cardMaker("Fries", "3", img2);
    cardMaker("Fries", "3", img2);
    cardMaker("Burger", "6", img1);
})

aboutButton.addEventListener("click", function () {
    mainContainer.innerHTML = "";
    makeAbout(mainContainer);
})