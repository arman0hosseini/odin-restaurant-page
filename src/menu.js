
export default function makeMenu(container) {
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-content";

    container.appendChild(menuContainer);

    return function mankeMenuCard(name, price, imgSrc) {
        const cardContaienr = document.createElement("div");
        cardContaienr.classList.add("card");

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");

        const img = document.createElement("img");
        img.src = imgSrc;

        const priceContainer = document.createElement("div");
        priceContainer.classList.add("price");

        const foodName = document.createElement("p");
        foodName.textContent = name;

        const foodPrice = document.createElement("p");
        foodPrice.textContent = `${price}$`;

        imgContainer.appendChild(img);
        priceContainer.appendChild(foodName);
        priceContainer.appendChild(foodPrice);
        cardContaienr.appendChild(imgContainer);
        cardContaienr.appendChild(priceContainer);

        menuContainer.appendChild(cardContaienr);
    }
}

// function mankeMenuCard(menuContainer, name, price, imgSrc) {
//     const cardContaienr = document.createElement("div");
//     cardContaienr.classList.add("card");

//     const imgContainer = document.createElement("div");
//     imgContainer.classList.add("img-container");

//     const img = document.createElement("img");
//     img.src = imgSrc;

//     const priceContainer = document.createElement("div");
//     priceContainer.classList.add("price");

//     const foodName = document.createElement("p");
//     foodName.textContent = name;

//     const foodPrice = document.createElement("p");
//     foodPrice.textContent = price;

//     imgContainer.appendChild(img);
//     priceContainer.appendChild(foodName);
//     priceContainer.appendChild(foodPrice);
//     cardContaienr.appendChild(imgContainer);
//     cardContaienr.appendChild(priceContainer);

//     menuContainer.appendChild(cardContaienr);
// }
