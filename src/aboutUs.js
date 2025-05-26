export default function makeAbout(container) {
    const aboutContainer = document.createElement("div");
    aboutContainer.id = "about";

    const aboutTitle = document.createElement("h2");
    aboutTitle.textContent = "About Us";

    const aboutP1 = document.createElement("p");
    aboutP1.innerHTML = "At <strong>My Restaurant</strong>, we're more than just a place to eat — we're a celebration of flavors, family, and fire. Since our humble beginnings, we've been passionate about serving food that warms the soul and brings people together."

    const aboutP2 = document.createElement("p");
    aboutP2.textContent = "  Our chefs blend tradition with creativity, crafting each dish with locally-sourced ingredients and a touch of bold innovation. Whether it's a classic recipe passed down for generations or a new twist on an old favorite, we believe food should always tell a story."

    const aboutP3 = document.createElement("p");
    aboutP3.textContent = " Built on the values of hospitality, quality, and community, our team is here to ensure every visit feels like coming home.Pull up a chair, share a laugh, and stay a while — you're always welcome at our table."

    aboutContainer.appendChild(aboutTitle);
    aboutContainer.appendChild(aboutP1);
    aboutContainer.appendChild(aboutP2);
    aboutContainer.appendChild(aboutP3);

    container.appendChild(aboutContainer);
}