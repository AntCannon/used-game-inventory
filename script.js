// giantbomb api = "81e314bb98e0e727dea2b08bd4e37b0099ed7ad8"

// giantapi documentation = https://www.giantbomb.com/api/

console.log("Hello World")

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
