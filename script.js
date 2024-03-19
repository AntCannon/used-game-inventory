// get form data
const gameForm = document.getElementById("add-game-form")
console.log(gameForm)

// form submission event
gameForm.addEventListener("submit", e => {
  e.preventDefault();
  const platform = gameForm.platform.value
  const gameTitle = gameForm.gameTitle.value
  const edition = gameForm.edition.value
  const stock = gameForm.initialStock.value

  addInventoryRow(platform, gameTitle, edition, stock);
  gameForm.reset();
})

// form reset button
const resetButton = document.getElementById("reset-button")
function addListenerToResetButton(button, form) {
  button.addEventListener("click", () => {
    form.reset();
  })
}
addListenerToResetButton(resetButton, gameForm);
  
// get table body
const tableBody = document.getElementById("inventory-body")

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

// add inventory row function
function addInventoryRow (platform, gameTitle, edition, stock) {
  // create new row
  const inventoryRow = document.createElement("tr");

  // variables for buttons
  let decrementButton;
  let stockSpan;
  let incrementButton;
  let out;
  let total;
  
  // create cells
  for (let elClass of tableColumns) {
    const cell = document.createElement("td");
    cell.classList.add(elClass);
    if (elClass === "platform") {
      cell.innerText = platform
    } else
    if (elClass === "game-title") {
      cell.innerText = gameTitle
    }
    if (elClass === "game-edition") {
      cell.innerText = edition
    }
    if (elClass === "stock-cell") {
      decrementButton = createStockDecrementButton(cell);
      stockSpan  = createStockSpan(cell, stock);
      incrementButton = createStockIncrementButton(cell);

      addListenerToDecrementButton(decrementButton, stockSpan);
      addListenerToIncrementButton(incrementButton, stockSpan);
    }

    if (elClass === "out") {
      out = cell
      out.innerText = 0;
    }

    if (elClass === "total") {
      total = cell
      total.innerText = stock;
    }

    if (elClass === "remove") {
      createRowRemoveButton(cell);
    }

    inventoryRow.appendChild(cell);
  }

  addListenerUpdateTotalToStockButtons(decrementButton, incrementButton, stockSpan, out, total);

  tableBody.appendChild(inventoryRow);
}

// create row remove eventListener function
function addListenerToRowRemoveButton(node) {
  node.addEventListener("click", (e) => {
    node.parentNode.parentNode.remove();
  })
}

// create stock decrement button
function createStockDecrementButton(node) {
  const decrementButton = document.createElement("button");
  decrementButton.setAttribute("type", "button");
  decrementButton.classList.add("decrease-stock")
  decrementButton.innerText = "-"
  node.appendChild(decrementButton);

  return decrementButton;
}

// create stock span
function createStockSpan(node, stock) {
  const span = document.createElement("span");
  span.classList.add("stock");
  span.innerText = stock;
  node.appendChild(span)

  return span;
}

// add listener to stock decrement button
function addListenerToDecrementButton(button, stockSpan) {
  button.addEventListener("click", () => {
    let currentStock = +stockSpan.innerText
    if (currentStock > 0) {
      stockSpan.innerText = --currentStock;
    }
  })
}

// create stock increment button
function createStockIncrementButton(node) {
  const incrementButton = document.createElement("button");
  incrementButton.setAttribute("type", "button");
  incrementButton.classList.add("increase-stock")
  incrementButton.innerText = "+"
  node.appendChild(incrementButton);

  return incrementButton;
}

// add listener to stock increment button
function addListenerToIncrementButton(button, stockSpan) {
  button.addEventListener("click", () => {
    let currentStock = +stockSpan.innerText
    if (currentStock < 99) {
      stockSpan.innerText = ++currentStock;
    }
  })
}

// create inventory row remove button
function createRowRemoveButton(node) {
  const rowRemoveButton = document.createElement("button");
  rowRemoveButton.classList.add("remove-button");
  rowRemoveButton.innerText = "Remove";
  addListenerToRowRemoveButton(rowRemoveButton)
  node.appendChild(rowRemoveButton)
}

// add updateTotal listener to increment and decrement buttons
function addListenerUpdateTotalToStockButtons(decrement, increment, stockSpan, out, total) {
  decrement.addEventListener("click", (e) => {
    updateTotal(stockSpan, out, total);
  })
  increment.addEventListener("click", (e) => {
    updateTotal(stockSpan, out, total);
  })
}

// update total
function updateTotal(stockSpan, out, total) {
  const newTotal = +stockSpan.innerText + +out.innerText;
  total.innerText = newTotal;
}