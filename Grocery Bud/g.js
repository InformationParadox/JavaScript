// Select Items
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// Event Listeners

// submit form
form.addEventListener("submit", addItems);

// clear btn
clearBtn.addEventListener("click", clearItems);

//load items
// window.addEventListener('DOMContentLoaded', setupItems);

//functions
function addItems(e) {
    e.preventDefault();
    // console.log(grocery.value);
    const value = grocery.value;
    //unique id assign
    const id = new Date().getTime().toString();
    // console.log(id);

    // if(value !== "" && editFlag === false) {
    //     console.log("add item to the list");
    // }
    // else if(value !== "" && editFlag === true) {
    //     console.log("editing");
    // }
    // else {
    //     console.log("empty value");
    // }

    if(value  && !editFlag ) {
        // console.log("add item to the list");
        const element = document.createElement('article');
        //add class
        element.classList.add("grocery-item");
        //add id dynamically ie data-id
        const attribute = document.createAttribute("data-id");
        element.setAttributeNode(attribute);
        element.innerHTML = `  
          <p class="title">${value}</p>
        
        <div class="btn-container">
          <button class="edit-btn" type="button">
            <i class="fas fa-edit"></i>
          </button>

          <button class="delete-btn" type="button">
            <i class="fas fa-trash"></i>
          </button>
        </div>`;

        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");
        deleteBtn.addEventListener('click', deleteItems);
        editBtn.addEventListener('click', editItems);

        // append child
        list.appendChild(element);
        // display alert
        displayAlert("Item added to the list", "success");
        // show container
        container.classList.add("show-container");
        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();
    }

    else if(value && editFlag ) {
        // console.log("editing");
        editElement.innerHTML = value;
        displayAlert("Value Changed", "success");
        // edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    }

    else {
        // console.log("empty value");
        displayAlert("Please Enter The Value", "danger");
    }
}

//display alert
function displayAlert(text, action) {
    alert.textContent = text;
    // alert.classList.add("alert-danger");
    alert.classList.add(`alert-${action}`);

    //remove alert
    setTimeout( function() {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1500);
}

// clear items
function clearItems() {
    const items = document.querySelectorAll(".grocery-item");

    if(items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item);
        });
    }

    container.classList.remove("show-container");
    displayAlert("Empty list", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
}

// delete func
function deleteItems(e) {
    // console.log("item deleted");
   
    // current target gareko chai button nai click garda event fire hos bhaner not the font-icons
    // yaha hamle button ko parent ko ni parent lai reference linxau 
    // coz hamle grocery-items lai already select garisakkyou and will 
    // be much easier 
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id; //dynamically set data-id
    list.removeChild(element);

    if(list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
}

//edit func
function editItems(e) {
    // console.log("item edit");
    const element = e.currentTarget.parentElement.parentElement;

    // set edit item btn-container ko sibling ie items
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set from value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "Edit";
}
// set back to default
function setBackToDefault() {
    // console.log("set back to default");
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = "Submit";
}

// LOCAL STORAGE
function addToLocalStorage(id, value) {
    // console.log("added to localstorage");
    const grocery = {id:id, value:value}; // {id,value}
    // console.log(grocery);
    // check item does exits or not
    let items = getLocalStorage();
    // console.log(items) //null

    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function(item) {
        if(item.id !== id) {
            return item;  
        }
    });
    localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
  
    items = items.map(function (item) {
      if (item.id === id) {
        item.value = value;
      }
      return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
  }
  
function getLocalStorage() {
    return localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
  }



// local storage API
// setItem
// getItem
// removeItem
// save as strings

/************-------------- ***********/
// localStorage.setItem("orange", JSON.stringify(["item1", "item2"]));
// const oranges = JSON.parse(localStorage.getItem("orange"));
// console.log(oranges);

// localStorage.removeItem('orange');

// SETUP ITEMS
// function setupItems() {
//     let items = getLocalStorage();

//     if(items.length > 0) {

//     }
// }

// function createListItem(id, value) {

// }