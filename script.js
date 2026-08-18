function addWish(containerId){

    const item = prompt("What do you want to add? ✨");

    if(!item) return;

    const container = document.getElementById(containerId);

    const newItem = document.createElement("div");

    newItem.className = "wishlist-item";

    newItem.innerHTML = `
        <span>♡</span>
        <p>${item}</p>
    `;

    container.appendChild(newItem);

}