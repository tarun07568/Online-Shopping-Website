// Main function to get data and show cards
async function loadData() {
 
    // 1. Fetch data from app.json
    const response = await fetch("https://fakestoreapi.com/products");
    const users = await response.json();  // Convert response into JS object
    console.log(users); // Just to check in console

    // 2. Find the main container where we want to put our cards
    const mainDiv = document.getElementById("mainDiv");

    // 3. Loop through each user and create a card
    for(let user of users){
      // Create a card container
      const card = document.createElement("div");
      card.classList.add('cardDiv'); // add CSS class

      // Prepare a truncated title and build card with image on top, title below
     
      card.innerHTML = `
        <img src="${user.image}" alt="${user.title}">
        <h4 class="product-title" title="${user.title}">${user.title}</h4>
        <button class="viewButton" id="viewButton">View Info</button>
      `;

      // Add the card to the page
      mainDiv.appendChild(card);
    
    };
  
}
loadData()




