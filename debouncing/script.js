// Select input field using DOM
const inputField = document.getElementById("debounce");

// Imagine this is a function which makes some API call
const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/carts");
  const data = await response.json();
  console.log(data);
};

// Implementing debounce function
const debounceFunction = (fetchData, time) => {
  let timer;
  return function () {
    const context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fetchData.apply(context, args);
    }, time);
  };
};

const betterFunction = debounceFunction(fetchData, 1000);
inputField.addEventListener("keyup", betterFunction);
