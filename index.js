"use strict";
let tasks = [];
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
function saveTasks() {
    try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    catch (error) {
        console.error("Could not save tasks to localStorage", error);
    }
}
function loadTasks() {
    try {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            tasks = JSON.parse(storedTasks);
            renderTasks();
        }
    }
    catch (error) {
        console.error("Could not load tasks from localStorage", error);
        tasks = [];
    }
}
function renderTasks() {
    taskList.innerHTML = '';
    if (tasks.length === 0) {
        const emptyState = document.createElement('li');
        emptyState.textContent = "No tasks yet. Add one above!";
        emptyState.style.textAlign = 'center';
        emptyState.style.color = '#888';
        taskList.appendChild(emptyState);
        return;
    }
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id.toString());
        li.setAttribute('role', 'listitem');
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.className = 'task-text';
        taskText.setAttribute('tabindex', '0');
        if (task.completed) {
            taskText.classList.add('completed');
        }
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '×';
        deleteBtn.className = 'delete-btn';
        deleteBtn.setAttribute('aria-label', `Delete task: ${task.text}`);
        li.appendChild(taskText);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
function addTask(text) {
    const newTask = {
        id: Date.now(),
        text,
        completed: false,
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
}
function toggleTask(id) {
    tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
    saveTasks();
    renderTasks();
}
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
        taskInput.focus();
    }
});
taskList.addEventListener('click', (e) => {
    const target = e.target;
    const parentLi = target.closest('li');
    if (!parentLi)
        return;
    const taskId = Number(parentLi.dataset.id);
    if (target.classList.contains('delete-btn')) {
        deleteTask(taskId);
    }
    else if (target.classList.contains('task-text')) {
        toggleTask(taskId);
    }
});
// Allow toggling task with Enter key for accessibility
taskList.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const target = e.target;
        if (target.classList.contains('task-text')) {
            const parentLi = target.closest('li');
            if (!parentLi)
                return;
            const taskId = Number(parentLi.dataset.id);
            toggleTask(taskId);
        }
    }
});
document.addEventListener('DOMContentLoaded', loadTasks);
//# sourceMappingURL=index.js.map