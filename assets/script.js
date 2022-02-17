console.dir (window.document);
var buttonEl = document.querySelector("#save-task");
var tasksToEl=document.querySelector("#tasks-to-do");

var createTaskHandler=function(){
    var listItemEl=document.createElement("li");
    listItemEl.textContent="this is a new task.";
};
buttonEl.addEventListener("click", createTaskHandler);
var listItemEl=document.createElement("li");
listItemEl.className="task-item";
listItemEl.textContent="This is a new task.";
tasksToEl.appendChild(listItemEl);


