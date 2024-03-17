// get form data
const addGameForm = document.getElementById("add-game-form")
console.log(addGameForm)


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
const inventoryRow = document.createElement("tr");

// create cells
