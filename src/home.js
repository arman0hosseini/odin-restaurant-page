export default function makeHome(container) {
    const homeContainer = document.createElement("div");
    homeContainer.id = "home";

    const homeTitle = document.createElement("h2");
    homeTitle.textContent = "Welcome to My Restaurant";

    const homeP1 = document.createElement("p");
    homeP1.innerHTML = "Discover a world of taste and tradition at <strong>My Restaurant</strong>, where every dish tells a story and every bite feels like home."

    const homeP2 = document.createElement("p");
    homeP2.textContent = "From sizzling starters to fire-grilled specialties, our kitchen is fueled by passion and perfected with local, fresh ingredients. Whether you're here for a cozy dinner or a weekend brunch, we promise bold flavors and warm hospitality."

    const homeP3 = document.createElement("p");
    homeP3.textContent = "Ready to dive in? Check out our seasonal specials and house favorites — crafted to satisfy every craving."

    const homeButton = document.createElement("button");
    homeButton.textContent = "Explore the Menu";
    homeButton.classList.add("cta-button");

    homeContainer.appendChild(homeTitle);
    homeContainer.appendChild(homeP1);
    homeContainer.appendChild(homeP2);
    homeContainer.appendChild(homeP3);
    homeContainer.appendChild(homeButton);
    container.appendChild(homeContainer);

}