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
    addListenerToRowRemoveButton(removeButton)
  }
}

addListenerToRemoveButtons();


// table columns
const tableColumns = ["platform", "game-title", "game-edition", "stock-cell", "out", "total", "remove"]

function addInventoryRow (platform, gameTitle, edition, stock) {
  // create new row
  
  const inventoryRow = document.createElement("tr");
  
  // create cells
  for (let elClass of tableColumns) {
    const cell = document.createElement("td");
    cell.classList.add(elClass);
    if (elClass === "platform") {
      cell.innerText = platform
    }
    if (elClass === "game-title") {
      cell.innerText = gameTitle
    }

    if (elClass === "game-edition") {
      cell.innerText = edition
    }

    if (elClass === "stock-cell") {
      createStockDecrementButton(cell)
      createStockSpan(cell, stock)
      createStockIncrementButton(cell)
    }

    if (elClass === "total") {
      cell.innerText = stock
    }

    if (elClass === "remove") {
      createRowRemoveButton(cell);
    }


    inventoryRow.appendChild(cell)
  }
  tableBody.appendChild(inventoryRow);
}


// create row remove eventListener function
function addListenerToRowRemoveButton(node) {
  node.addEventListener("click", (e) => {
    node.parentNode.parentNode.remove()
  })
}

// create stock decrement button
function createStockDecrementButton(node) {
  const decrementButton = document.createElement("button");
  decrementButton.classList.add("decrease-stock")
  decrementButton.innerText = "-"
  node.appendChild(decrementButton)
}

// create stock span
function createStockSpan(node, stock) {
  const span = document.createElement("span");
  span.classList.add("stock");
  span.innerText = stock;
  node.appendChild(span)
}

// create stock increment button
function createStockIncrementButton(node) {
  const incrementButton = document.createElement("button");
  incrementButton.classList.add("increase-stock")
  incrementButton.innerText = "+"
  node.appendChild(incrementButton)
}

// create inventory row remove button
function createRowRemoveButton(node) {
  const rowRemoveButton = document.createElement("button");
  rowRemoveButton.classList.add("remove-button");
  rowRemoveButton.innerText = "Remove";
  addListenerToRowRemoveButton(rowRemoveButton)

  node.appendChild(rowRemoveButton)
}