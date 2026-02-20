const fs = require("fs");
const filePath = "./tasks.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filePath);
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (error) {
    return [];
  }
};

const storeTask = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath, dataJSON);
};

const addTask = (task) => {
  let tasks = loadTasks();
  tasks.push({ task });
  storeTask(tasks);
};

const listTasks = () => {
  const tasks = loadTasks();
  tasks.forEach((item) => {
    console.log(item);
  });
};

const removeTask = (task) => {
  let tasks = loadTasks();
  tasks = tasks.filter((item) => item.task !== task);
  storeTask(tasks);
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
  addTask(argument);
} else if (command === "remove") {
  removeTask(parseInt(argument));
} else if (command === "list") {
  listTasks();
} else {
  console.log("Please enter a valid command !!!!!");
}
