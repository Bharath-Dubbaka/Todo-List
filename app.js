const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//load all Event Listeners//
loadEventListeners();

//load all Event Listeners Function// 
function loadEventListeners () {
    //Add task event//
    form.addEventListener("submit", addTask)
    //removing task//
    taskList.addEventListener("click", removeTask)
    //clear all tasks//
    clearBtn.addEventListener('click', clearTasks) 
    //filter through tasks//
    filter.addEventListener('keyup', filterTasks)
}

//Add Task//***add breif notes for every step like you for below function */
function addTask(e) {
    if (taskInput.value===""){
        alert("Add Content");
    } else {
  // Create li element
  const li = document.createElement("li");
  // Add class
  li.className = 'collection-item';
// Create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');  
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);
  //Clear input
  taskInput.value = "";
  //Prevent default action
  e.preventDefault();


}}

//remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains("delete-item")){//we are doing parent element bcz we want <a> to be selected so that we can delete but we are only getting <i> in console..for eg: we used same parentElement to get all <li> selected and delete the whole li by only targetting its child <a> by its checking if it contains the desired className in classList if yes then delete//
        if (confirm('Are you sure ?')) {
        e.target.parentElement.parentElement.remove()
    }
    }
    console.log(e.target)
}


//clear tasks
function clearTasks () {
  taskList.innerHTML = '';
}
//Below is *** faster way to clear all tasks but not much advantage unless unsing big application//
//go through this link to learn more about this https://jsperf.com/innerhtml-vs-removechild
// while(taskList.firstChild) {
//     taskList.removeChild(taskList.firstChild);
//   }}


//filterTasks//
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
  
    document.querySelectorAll('.collection-item').forEach(function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
  }



//   // Store in LS
//   storeTaskInLocalStorage(taskInput.value);

  // Clear input




// document.querySelector(".delete-item").addEventListener("click", onclick);
// function onclick(e) {
//     console.log("clicked");
// }
