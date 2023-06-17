import {
        buildNewTask,
        buildNewList,
        
        deleteTaskDOM,
        checkTaskDOM,
        
        getListIndex,
        getTaskIndex,

} from "./DOM.js";

const newTaskPopup=document.querySelector(".new-task-popup");

const nameField=document.querySelector("#popup-task-name-input");
const descriptionField=document.querySelector('#popup-task-description-input');
const dueDateField=document.querySelector("#popup-task-duedate-input");
const priorityField=document.querySelector("#popup-task-priority-input");


const tasks=document.querySelector('#tasks');

const listsArray=[];

class Task{
    constructor(name,description,dueDate,priority,checked){
        this.name=name;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.checked=checked;

    }
}

class List{
    constructor(name){
        this.name=name;
        this.content=[];
    }
    addTaskToList(task){
        this.content.push(task);
    }

    render(){
        for(let i=0;i<this.content.length;i++)
        {
            buildNewTask(
                this.content[i].name,
                this.content[i].description,
                this.content[i].dueDate,
                this.content[i].priority,
                this.content[i].checked
            );
        }
    }

}

let currentList=new List("Example Projects");
listsArray.push(currentList);

function addTask()
{
    if(nameField.value!="" && descriptionField.value!="" && dueDateField.value!="" && priorityField.value!="" )
    {
        const newTask=new Task(nameField.value,descriptionField.value,dueDateField.value,priorityField.value,false);
         currentList.content.push(newTask);
         buildNewTask(newTask.name,newTask.description,newTask.dueDate,newTask.priority,newTask.checked);


         newTaskPopup.style.display="none";
        
    }
   

    
}

const listNameField=document.querySelector("#popup-list-name-input");
const newListPopup=document.querySelector(".new-list-popup");

function deleteTask(task)
{
    currentList.content.splice(getTaskIndex(task),1);
    deleteTaskDOM(task);
}

function addList()
{
    if(listNameField.value!=""){
        const newList=new List(listNameField.value);
        buildNewList(newList.name);
        listsArray.push(newList);
        newListPopup.style.display="none";
    }
}

function selectCurrentList(list)
{
    currentList=listsArray[getListIndex(list)];
    tasks.innerHTML="";
    currentList.render();

}


function checkTask(task)
{
    if(currentList.content[getTaskIndex(task)].checked==false){
        currentList.content[getTaskIndex(task)].checked=true;
    }else{
        currentList.content[getTaskIndex(task)].checked=false;
    }
    checkTaskDOM(task);
}

export { addList, addTask, selectCurrentList, deleteTask, checkTask };



