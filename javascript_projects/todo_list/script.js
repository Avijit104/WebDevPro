document.addEventListener("DOMContentLoaded", () => {
  const addTask = document.getElementById("add-task");
  const addBtn = document.getElementById("add-btn");
  const showTask = document.getElementById("show-task");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  upddateTodo();

  addBtn.addEventListener("click", () => {
    // add button function
    let taskText = addTask.value.trim();
    if (taskText) {
      let taskObject = {
        id: Date.now(),
        text: taskText,
        completed: false,
      };
      console.log(typeof taskObject.id);
      tasks.push(taskObject);
      renderTodo(taskObject);
      addLocalStorage();
    }
    addTask.value = "";
  });

  function renderTodo(item) {
    //renders each tasks
    let div = document.createElement("div");
    div.setAttribute("id", item.id);
    div.innerHTML = `
        <p>${item.text}</p>
        <button value = ${item.id}>Delete</button>
        `;
    div.classList.add("todo");
    if (item.completed) {
      div.classList.add("strike");
    }
    showTask.appendChild(div);
    addLocalStorage();
  }

  showTask.addEventListener("click", (e) => {
    // delete button function
    if (e.target.tagName === "BUTTON") {
      tasks = tasks.filter((i) => e.target.value !== `${i.id}`);
      let currElement = document.getElementById(e.target.value);
      showTask.removeChild(currElement);
      addLocalStorage();
    }
  });

  function upddateTodo() {
    // loads all tasks
    tasks.forEach((item) => renderTodo(item));
  }

  function addLocalStorage() {
    //local storage function
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
