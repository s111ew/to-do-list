const addEventListeners = () => {
    const inputBox = document.querySelector("#itemInput");
    const addButton = document.querySelector("#addItemButton");

    addButton.addEventListener("click", () => {
        let newListItem = inputBox.value.trim();
        newListItem = newListItem.toLowerCase();
        newListItem = newListItem.slice(0, 1).toUpperCase() + newListItem.slice(1);
        if (newListItem) {
            addNewListItem(newListItem);
            inputBox.value = "";
        }
        inputBox.focus();
    })
};

const addNewListItem = (newListItem) => {
    const list = document.querySelector("#list");

    const newListElement = document.createElement("li");
    newListElement.textContent = newListItem;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Remove Item";

    deleteButton.addEventListener("click", () => {
        list.removeChild(newListElement);
    });

    newListElement.appendChild(deleteButton);
    list.appendChild(newListElement);
};

addEventListeners();