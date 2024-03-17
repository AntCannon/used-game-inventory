// get form data
const gameForm = document.getElementById("add-game-form")
console.log(gameForm)

gameForm.addEventListener("submit", e => {
  e.preventDefault();
  const platform = gameForm.platform.value
  const gameTitle = gameForm.gametitle.value
  const edition = gameForm.edition.value
  const stock = gameForm.initialStock.value
  addInventoryRow();
})

// get table body
const tableBody = document.getElementById("inventory-body")
console.log(tableBody)


// add remove button listeners to existing remove buttons

function addListenerToRemoveButtons() {
  const removeButtons = tableBody.querySelectorAll(".remove-button")
  for (let removeButton of removeButtons) {
    removeButton.addEventListener("click", (e) => {
      console.log("remove button click")
      removeButton.parentNode.parentNode.remove()
    })
  }
}

addListenerToRemoveButtons();


// create new row
const tableColumns = ["platform", "game-title", "game-edition", "stock", "out", "total", "remove"]

function addInventoryRow () {
  const inventoryRow = document.createElement("tr");
  for (let elClass of tableColumns) {
    const cell = document.createElement("td");
    cell.classList.add("elClass");

    if (elClass === "stock") {
    }
    inventoryRow.appendChild(cell)
  }
  tableBody.appendChild(inventoryRow);
}


// create cells
