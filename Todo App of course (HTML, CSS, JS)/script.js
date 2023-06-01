const body = document.querySelector('body');
const main = document.querySelector('main');
const input = document.querySelector('.task_input');
const addButton = document.querySelector('.add');
const taskList = document.querySelector('.task_list');
const buttons = document.querySelector('.buttons');
const dark_mode = document.querySelector('.dark_mode_button');
const task_input = document.querySelector('.task_input');
const overlay = document.querySelector('.overlay');
const lightbulb_icon = document.querySelector('.fa-lightbulb');

// Render stored tasks on page load.

const onLoad = () => {
  const storedTasks = Object.values(localStorage);
  const storedKeys = Object.keys(localStorage);
  for (let i = 0; i < storedTasks.length; i++) {
    createTask(storedKeys[i], storedTasks[i]);
  }
};

// Get input value

let newTask = '';
input.addEventListener('input', () => {
  newTask = input.value;
});

// Function creates task elements with buttons in DOM.

const createTask = (taskId, taskText) => {
  const task = document.createElement('li');
  const text = document.createElement('span');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');
  const buttons = document.createElement('div');
  const id = taskId;

  text.innerText = taskText;
  editButton.innerText = 'EDIT';
  deleteButton.innerText = 'DELETE';

  buttons.append(editButton, deleteButton);
  task.append(text, buttons);
  taskList.append(task);

  // Add classes
  task.classList.add('task');
  editButton.classList.add('edit', 'button');
  deleteButton.classList.add('delete', 'button');
  buttons.classList.add('buttons');

  editButton.addEventListener('click', () =>
    editTask(editButton, text, id, task)
  );
  deleteButton.addEventListener('click', () => deleteTask(task, id));
};

// Create unique ID and add task to the list and local storage.

const addTask = () => {
  const id = crypto.randomUUID();
  const taskObject = {
    id: id,
    text: newTask,
  };

  createTask(id, newTask);
  addToLocalStorage(taskObject);

  newTask = '';
  input.value = '';
};

// Function enables editing of added task.

const editTask = (button, text, id, task) => {
  text.setAttribute('tabindex', '-1');
  if (button.innerText === 'EDIT') {
    button.innerText = 'SAVE';
    text.setAttribute('contenteditable', 'true');
    text.focus();
    window.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        button.innerText = 'EDIT';
        text.blur();
        text.setAttribute('contenteditable', 'false');
        text.innerText === ''
          ? deleteTask(task, id)
          : localStorage.setItem(id, text.innerText);
      }
    });
  } else {
    button.innerText = 'EDIT';
    text.setAttribute('contenteditable', 'false');
    text.blur();
    text.innerText === ''
      ? deleteTask(task, id)
      : localStorage.setItem(id, text.innerText);
  }
};

// Function saves task text and id in local storage.

const addToLocalStorage = (object) => {
  localStorage.setItem(object.id, object.text);
};

// Function deletes task from task list and local storage.

const deleteTask = (task, id) => {
  task.remove();
  localStorage.removeItem(id);
};

addButton.addEventListener('click', () => {
  if (!newTask) {
    alert('Please add new task');
  } else addTask();
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (!newTask) {
      alert('Please add new task');
    } else addTask();
  }
});

//Add styles for dark mode.

dark_mode.addEventListener('click', () => {
  body.classList.toggle('dark_mode');
  main.classList.toggle('dark_mode');

  document.styleSheets[0].cssRules[12].style.color === 'rgb(228, 219, 219)'
    ? (document.styleSheets[0].cssRules[12].style.color =
        'rgba(100, 108, 255, 0.506)')
    : (document.styleSheets[0].cssRules[12].style.color = 'rgb(228, 219, 219)');

  !lightbulb_icon.style.color
    ? (lightbulb_icon.style.color = 'rgb(255, 255, 255)')
    : (lightbulb_icon.style.color = '');
});

onLoad();
