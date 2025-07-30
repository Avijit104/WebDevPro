// example 1
const changeText = document.getElementById("changeText");
changeText.addEventListener("click", function () {
  console.log(this);
  document.getElementById("myPara").textContent = "this is changed text";
});

// example 2
const heighlight = document.getElementById("highCity");
heighlight.addEventListener("click", function () {
  document
    .getElementById("citylist")
    .firstElementChild.classList.add("heighlight");
});

// example 3
const changeOrder = document.getElementById("changeOrder");
changeOrder.addEventListener("click", function () {
  const coffeeType = document.getElementById("coffeeType");
  coffeeType.innerText = "espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "10px";
});

// example 4
const addItem = document.getElementById("addItem");
addItem.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  const items = document.getElementById("items");
  items.appendChild(newItem);
});

// example 5
const removeItem = document.getElementById("removeItem");
removeItem.addEventListener("click", function () {
  const tasks = document.getElementById("tasks");
  tasks.lastElementChild.remove();
});

//example 6
document.getElementById("clickMe").addEventListener("click", function () {
  alert("this is an alert");
});

//example 7
const tea = document.querySelectorAll(".teaItem");
tea.forEach((item) => {
  item.addEventListener("click", function () {
    console.log(item);
    item.classList.add("heighlight");
  });
});

//example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("view").textContent = feedback;
  });

//example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM content loaded";
});

//example 10
document.getElementById("toggleColor").addEventListener("click", function () {
  let desc = document.getElementById("descText");
  desc.classList.toggle("heighlight", false);
});
