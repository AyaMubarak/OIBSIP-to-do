const date = document.querySelector(".date");
const dateNow = new Date();
const formattedDate = dateNow.toDateString();
date.innerHTML = formattedDate;

const input = document.querySelector(".input");
const mainList = document.getElementById("mainList");

function addTask() {
    const task = input.value.trim();
    if (task !== "") {
        const taskDiv = document.createElement("div");
        taskDiv.textContent = task;
        taskDiv.draggable = true;
        taskDiv.classList.add('task');
        taskDiv.addEventListener("dragstart", (event) => {
            event.target.classList.add('dragging');
            event.dataTransfer.setData("text/plain", event.target.textContent);
        });
        mainList.appendChild(taskDiv);
        input.value = "";
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.querySelector('.dragging');
    const targetList = event.target.closest('.droppable-list');

    if (draggedElement && targetList) {
        const taskDiv = document.createElement("div");
        taskDiv.textContent = data;

     
        if (draggedElement.parentNode === uncompletedList && targetList === completedList) {
            taskDiv.style.backgroundColor = "#0077B6";
        }

        targetList.appendChild(taskDiv);
        draggedElement.parentNode.removeChild(draggedElement);
    }
}



