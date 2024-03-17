// get form data
const gameForm = document.getElementById("add-game-form")
console.log(gameForm)

gameForm.addEventListener("submit", e => {
  e.preventDefault();
  const platform = gameForm.platform.value
  const gameTitle = gameForm.gameTitle.value
  const edition = gameForm.edition.value
  const stock = gameForm.initialStock.value

  addInventoryRow(platform, gameTitle, edition, stock);
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

function addInventoryRow (platform, gameTitle, edition, stock) {
  const inventoryRow = document.createElement("tr");
  for (let elClass of tableColumns) {
    const cell = document.createElement("td");
    cell.classList.add("elClass");
    if (elClass === "platform") {
      cell.innerText = platform
    }
    if (elClass === "game-title") {
      cell.innerText = gameTitle
    }

    if (elClass === "game-edition") {
      cell.innerText = edition
    }

    if (elClass === "stock") {
      cell.innerText = stock
    }

    if (elClass === "total") {
      cell.innerText = stock
    }

    if (elClass === "remove") {
      cell.innerText = stock

      
    }


    inventoryRow.appendChild(cell)
  }
  tableBody.appendChild(inventoryRow);
}


// create cells
