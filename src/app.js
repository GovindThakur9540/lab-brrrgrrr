// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM

  let cheese = document.querySelector("#cheese");
  if(state.Cheese){
    cheese.style.display = "inherit";
  }else{
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM

  let tomatoe = document.querySelector("#tomatoe");
  if(state.Tomatoes){
    tomatoe.style.display ="inherit";
  }
  else{
    tomatoe.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM

  let onion = document.querySelector("#onion");
  if(state.Onions){
    onion.style.display = "inherit";
  } 
  else{
    onion.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM

  let lettuce = document.querySelector("#lettuce");
  if(state.Lettuce){
    lettuce.style.display = "inherit";
  }
  else{
    lettuce.style.display = "none";
  }
}


// Trial 2 - Setup event listener for the patty button

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
  renderAll("btn-Patty", state.Patty);
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  renderAll();
  renderAll("btn-Cheese", state.Cheese);
};

// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomato").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  renderAll();
  renderAll("btn-Toamtoes", state.Tomatoes);
};

// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onion").onclick = function () {
  state.Onions = !state.Onions;
  renderAll();
  renderAll("btn-Onions", state.Onions);
};

// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderAll();
  renderAll("btn-Lettuce", state.Lettuce);
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderBtn(key, value){
  var a = document.querySelector(".btn-" +key);
  if (value == true){
    a.classList.toggle("active");
  }
  else{
    a.classList.remove("active");
  }
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state

function renderIngredientsBoard(key, value){
  var a = documnet.querySelector("." + key);
  if(value == true){
    a.style.display = "inherit";
  }
  else{
    a.style.display = "none";
  }
}

//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients

let renderPrice = () => {
  let total = 20;
  for (let item in state){
    if(state[item]){
      total += ingredients[`${item}`];
    }
  }
  document.querySelector(".price-details").innerHTML = `INR ${total}`;
}

document.getElementsByClassName("Rectangle5")[0].addEventListener("click",function(){
  alert("Total Bill is"+document.querySelector(".price-details").innerHTML)
})