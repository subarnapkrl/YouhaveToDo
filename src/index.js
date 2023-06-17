
import {
    addTask,
    addList,
    selectCurrentList,
    deleteTask,
    checkTask,
  } from "./todo.js";
  import { expandTask, deleteList, changeActiveListDOM } from "./DOM.js";
  
  const newTask = document.querySelector("#new-task-icon");
  const newTaskPopup = document.querySelector(".new-task-popup");
  const closeTaskPopup = document.querySelector(".close-task-popup");
  const submitTask = document.querySelector("#submit-task");
  const submitList = document.querySelector("#submit-list");
  let expandTaskButtons = document.querySelectorAll(".expand-task-icon");
  let checkedTaskButtons = document.querySelectorAll(".checked-task-icon");
  let deleteTaskButtons = document.querySelectorAll(".delete-task-icon");
  const newList = document.querySelector(".new-list-icon");
  const newListPopup = document.querySelector(".new-list-popup");
  const closeListPopup = document.querySelector(".close-list-popup");
  let deleteListButtons = document.querySelectorAll(".delete-list-icon");
  let lists = document.querySelectorAll(".list");
  const tasks = document.querySelectorAll(".tasks");
  
  newTask.onclick = function () {
    newTaskPopup.style.display = "block";
  };
  
  closeTaskPopup.onclick = function () {
    newTaskPopup.style.display = "none";
  };
  
  closeListPopup.onclick = function () {
    newListPopup.style.display = "none";
  };
  
  newList.onclick = function () {
    newListPopup.style.display = "block";
  };
  
  submitTask.addEventListener("click", () => {
    addTask();
    expandTaskButtons = document.querySelectorAll(".expand-task-icon");
    checkedTaskButtons = document.querySelectorAll(".checked-task-icon");
    deleteTaskButtons = document.querySelectorAll(".delete-task-icon");
    expandTaskButtons.forEach(
      (expandTaskButton) =>
        (expandTaskButton.onclick = function () {
          expandTask(this);
        })
    );
    checkedTaskButtons.forEach(
      (checkedTaskButton) =>
        (checkedTaskButton.onclick = function () {
          checkTask(this.parentElement.parentElement);
        })
    );
    deleteTaskButtons.forEach(
      (deleteTaskButton) =>
        (deleteTaskButton.onclick = function () {
          deleteTask(this.parentElement.parentElement);
        })
    );
  });
  
  submitList.addEventListener("click", () => {
    addList();
    lists = document.querySelectorAll(".list");
    deleteListButtons = document.querySelectorAll(".delete-list-icon");
    deleteListButtons.forEach(
      (deleteListButton) =>
        (deleteListButton.onclick = function () {
          deleteList(this);
        })
    );
    lists.forEach((list) =>
      list.addEventListener("click", () => {
        changeActiveListDOM(list);
        selectCurrentList(list);
        expandTaskButtons = document.querySelectorAll(".expand-task-icon");
        checkedTaskButtons = document.querySelectorAll(".checked-task-icon");
        deleteTaskButtons = document.querySelectorAll(".delete-task-icon");
        expandTaskButtons.forEach(
          (expandTaskButton) =>
            (expandTaskButton.onclick = function () {
              expandTask(this);
            })
        );
        checkedTaskButtons.forEach(
          (checkedTaskButton) =>
            (checkedTaskButton.onclick = function () {
              checkTask(this.parentElement.parentElement);
            })
        );
        deleteTaskButtons.forEach(
          (deleteTaskButton) =>
            (deleteTaskButton.onclick = function () {
              const targetTask = this.parentElement.parentElement;
              deleteTask(targetTask);
            })
        );
      })
    );
  });
  
  expandTaskButtons.forEach(
    (expandTaskButton) =>
      (expandTaskButton.onclick = function () {
        expandTask(this);
      })
  );
  
  checkedTaskButtons.forEach(
    (checkedTaskButton) =>
      (checkedTaskButton.onclick = checkTask(this.parentElement.parentElement))
  );
  
  deleteTaskButtons.forEach(
    (deleteTaskButton) =>
      (deleteTaskButton.onclick = deleteTask(this.parentElement.parentElement))
  );
  
  deleteListButtons.forEach(
    (deleteListButton) =>
      (deleteListButton.onclick = function () {
        deleteList(this);
      })
  );
  