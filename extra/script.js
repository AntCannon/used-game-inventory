// game availability object
// const inventory = new Map([
//   ["Helldivers 2", new Map([
//     ["Platform", "PS5"],
//     ["Title", "Helldivers 2"],
//     ["Edition", "Standard"],
//     ["Availability", 0],
//     ["Out", 15],
//     ["id", 10230]
//     ])
//   ]
// ])

// console.log(inventory);

// lend form
const lendForm = document.getElementById("lend-form");

lendForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(lendForm);
})

// create table row
const inventoryBody = document.getElementById("inventory-body")

const borrowButton = document.querySelector(".borrow-button")
borrowButton.addEventListener("click", (e) => {
  e.preventDefault();
  const row = borrowButton.parentNode.parentNode;
  const platform = (row.querySelector(".platform"));
  const gameTitle = (row.querySelector(".game-title"));
  const gameEdition = (row.querySelector(".game-edition"));
  const stock = (row.querySelector(".stock"));
  const out = (row.querySelector(".out"));
  const expectedAvailability = (row.querySelector(".expected-availability"));
})