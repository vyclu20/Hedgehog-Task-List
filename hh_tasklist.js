const newtask = document.getElementById("todo-input");
const taskbutton = document.getElementById("add-button");
const toDo = document.getElementById("todo-list");
const doneList = document.getElementById("done-list");
const resetButton = document.getElementById("reset-button");
const clickSound = document.getElementById("click-sound");

//to do list add task
function addTask() {
    const taskText = newtask.value;
    if (taskText) {
        const newTaskItem = document.createElement("li");
        newTaskItem.textContent = taskText;
        newTaskItem.classList.add("task-item");
        newTaskItem.addEventListener("click", moveTask);
        toDo.appendChild(newTaskItem);
        newtask.value = "";
        playSound();
    }
}

//function to move task from the to do list to done list vice versa
function moveTask() {
    if (this.parentNode === toDo) {
        doneList.appendChild(this);
    } else {
        toDo.appendChild(this);
    }
    playSound();
}

//input and button
newtask.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

taskbutton.addEventListener("click", addTask);

//reset button
resetButton.addEventListener("click", function() {
    toDo.innerHTML = "";
    doneList.innerHTML = "";
    playSound();
});

//play sound effect
function playSound() {
    clickSound.currentTime = 0;
    clickSound.playbackRate = 2;
    clickSound.play();
}
