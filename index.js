var charEntered;
var taskName="";
var currentElement;
document.querySelector(".input input").addEventListener("keydown",addtask);

function addtask(){
    if(event.keyCode>=65 && event.keyCode<=91){
    taskName = document.querySelector(".addToDo").value;
    console.log(taskName);
}
if(event.key === "Enter"){
    if(taskName !== ""){
        taskName = document.querySelector(".addToDo").value;
        document.querySelector(".todolist").insertAdjacentHTML("afterbegin","<div>" +taskName+ "</div>");
        document.querySelector(".todolist div").classList.add("task");
        document.querySelector(".addToDo").value="";
        resetEventListeners();
    }
}


}
function resetEventListeners(){

for(i=0;i<document.querySelectorAll(".task").length;i++){
    document.querySelectorAll(".task")[i].removeEventListener("click",taskCompleted);
}
for(i=0;i<document.querySelectorAll(".task").length;i++){
    document.querySelectorAll(".task")[i].addEventListener("click",taskCompleted);
}
}
function taskCompleted(){
        currentElement=this;
        currentElement.classList.add("lowerOpacity");
        setTimeout(function(){currentElement.classList.add("hide");},300);
}

//Added Add Button for Smartphones
document.querySelector(".input").addEventListener("click",workOnSmartphone);
function workOnSmartphone(){
        if(taskName !== ""){
            taskName = document.querySelector(".addToDo").value;
            document.querySelector(".todolist").insertAdjacentHTML("afterbegin","<div>" +taskName+ "</div>");
            document.querySelector(".todolist div").classList.add("task");
            document.querySelector(".addToDo").value="";
            resetEventListeners();
        }
}