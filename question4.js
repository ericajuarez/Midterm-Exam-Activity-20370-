let tasks = [];

const todoForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function renderTasks() {
    taskList.innerHTML = ''; 
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>&nbsp;
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask(event) {
    event.preventDefault(); 
    const newTask = taskInput.value.trim(); 
    if (newTask) {
        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    }
}

function editTask(index) {
    const updatedTask = prompt('Edit your task:', tasks[index]);
    if (updatedTask !== null) {
        tasks[index] = updatedTask.trim();
        renderTasks();
    }
}

function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

todoForm.addEventListener('submit', addTask);

renderTasks();
