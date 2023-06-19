// Calling the input for the user type the task and the button to add the task on the list
let enterTask = document.querySelector("#addTask");
let addTodo = document.querySelector("#addTodo");
let todoList = document.querySelector("#todoList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(task => {
  let taskName = document.createElement('div');
  taskName.innerHTML = `
  <div class="task">
      <input type="checkbox" class="task-checkbox">
      <input type="text" class="task-name" value="${task}" disabled>
      <button class="edit-task">Edit</button>
      <button class="delete-task">Delete</button>
    </div>
    `
  todoList.appendChild(taskName);
})

enterTask.addEventListener('input', (e) => {
  let readInput = e.target.value;
  console.log(readInput);

  if (readInput === '') {
    addTodo.disabled = true;
  } else {
    addTodo.disabled = false;
  }
});

addTodo.addEventListener('click', () => {
  let readInput = enterTask.value;
  let taskName = document.createElement("div");
  taskName.innerHTML = `
    <div class="task">
      <input type="checkbox" class="task-checkbox">
      <input type="text" class="task-name" value="${readInput}" disabled >
      <button class="edit-task">Edit</button>
      <button class="delete-task">Delete</button>
    </div>
  `
  todoList.appendChild(taskName);
  enterTask.value = '';
  addTodo.disabled = true;

  tasks.push(readInput);
  localStorage.setItem('tasks', JSON.stringify(tasks));
})

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-task")) {
    e.target.parentElement.parentElement.remove();

    let taskName = e.target.previousElementSibling.value;
    tasks = tasks.filter(task => task !== taskName);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }


  if (e.target.classList.contains("edit-task")) {
    let taskNameInput = e.target.parentElement.querySelector(".task-name");
    taskNameInput.removeAttribute("disabled");
    taskNameInput.focus(); // optionally, set focus on the input field

    // attach another event listener to the input element to save the edited task
    taskNameInput.addEventListener("blur", (e) => {
      let editedTaskName = e.target.value;
      let taskIndex = tasks.indexOf(editedTaskName);
      if (taskIndex > -1) {
        alert("Task already exists!");
        e.target.value = tasks[taskIndex]; // restore the original value
      } else {
        tasks[tasks.indexOf(taskNameInput.value)] = editedTaskName;
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
      e.target.setAttribute("disabled", "");
    });
  }
})