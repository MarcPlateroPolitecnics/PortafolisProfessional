// POMODORO

const timerDisplay = document.getElementById('timer-display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const shortBreakButton = document.getElementById('short-break');
const longBreakButton = document.getElementById('long-break');
const alertSound = document.getElementById('alert-sound');

let timeLeft = 1500; // 25 minuts en segons
let timerId;
let isPaused = false;
let isTimerRunning = false;

shortBreakButton.addEventListener('click', () => {
    startTimer(300); // 5 minuts en segons
    startButton.textContent = 'Pausar';
});

longBreakButton.addEventListener('click', () => {
    startTimer(900); // 15 minuts en segons
    startButton.textContent = 'Pausar';
});

function startTimer(duration) {
    clearInterval(timerId);
    timeLeft = duration;
    displayTime();
    timerId = setInterval(() => {
        timeLeft--;
        displayTime();
        if (timeLeft === 0) {
            clearInterval(timerId);
            alertSound.play();
        }
    }, 1000);
}

function displayTime() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener('click', () => {
    if (!isTimerRunning) {
        startTimer(timeLeft);
        startButton.textContent = 'Pausar';
    } else {
        if (!isPaused) {
            clearInterval(timerId);
            isPaused = true;
            startButton.textContent = 'Reprendre';
        } else {
            startTimer(timeLeft);
            isPaused = false;
            startButton.textContent = 'Pausar';
        }
    }
    isTimerRunning = !isTimerRunning;
});

resetButton.addEventListener('click', () => {
    clearInterval(timerId);
    timeLeft = 1500;
    displayTime();
    isPaused = false;
    startButton.textContent = 'Començar';
    isTimerRunning = false;
});

// KANBAN

document.addEventListener('DOMContentLoaded', function() {
    const pendingColumn = document.getElementById('pending-column');
    const progressColumn = document.getElementById('progress-column');
    const completedColumn = document.getElementById('completed-column');

    let draggableTask = null;

    function createTask(title, description, category) {
        const task = document.createElement('div');
        task.classList.add('task');
    
        if (category) {
            task.classList.add(`${category}-task`);
            if (category === 'disseny') {
                task.classList.add('design-task');
            }
        } else {
            task.classList.add('default-task');
        }
    
        task.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <p><strong>Categoria:</strong> ${category ? category : 'Sense Categoria'}</p>
            <p><strong>Data i Hora de Creació:</strong> ${getCurrentDateTime()}</p>
            <button class="delete-button">Eliminar</button> <!-- Nou botó d'eliminar -->
        `;
        task.setAttribute('draggable', true);
        task.addEventListener('dragstart', dragStart);
    
        task.querySelector('.delete-button').addEventListener('click', function() {
            deleteTask(task);
        });
    
        return task;
    }
    
    function getCurrentDateTime() {
        const now = new Date();
        const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
        const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        return `${date} ${time}`;
    }

    function dragStart(event) {
        draggableTask = event.target;
    }

    function allowDrop(event) {
        event.preventDefault();
        if (draggableTask.classList.contains('completed')) {
            return false;
        }
        return true;
    }

    function drop(event) {
        event.preventDefault();
        const targetColumn = event.target.closest('.column');
        if (!draggableTask.classList.contains('completed') && !targetColumn.classList.contains('completed-column')) {
            if (targetColumn) {
                targetColumn.appendChild(draggableTask);
                if (targetColumn === completedColumn) {
                    markAsCompleted(draggableTask);
                }
            }
        }
        draggableTask = null;
    }

    function markAsCompleted(task) {
        task.classList.add('completed');
        task.innerHTML += '<i class="fas fa-check"></i>';
    }

    function deleteTask(task) {
        const isConfirmed = confirm('La tasca no està "completada", la vols eliminar?');
        if (isConfirmed) {
            task.remove();
        }
    }

    function deleteTaskCompletada(task) {
        const isConfirmed = confirm('L\'eliminaràs, estàs segur?');
        if (isConfirmed) {
            task.remove();
        }
    }

    document.getElementById('kanban-board').addEventListener('dragover', allowDrop);
    document.getElementById('kanban-board').addEventListener('drop', drop);

    document.getElementById('kanban-board').addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-button')) {
            const task = event.target.closest('.task');
            deleteTaskCompletada(task);
        }
    });

    document.getElementById('add-task').addEventListener('click', function() {
        const title = document.getElementById('task-title').value.trim();
        const description = document.getElementById('task-description').value.trim();
        const category = document.getElementById('task-category').value;
        
        if (title && description) {
            const newTask = createTask(title, description, category);
            pendingColumn.appendChild(newTask);
        } else {
            alert('Si us plau, ompli tots els camps abans d\'afegir una tasca.');
        }
    });         
});