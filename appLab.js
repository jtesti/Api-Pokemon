/* function readElements()
{
	taskInput = document.getElementById("task_input");
	taskAdd = document.getElementById("task_add");
	taskList = document.getElementById("task_list");
	taskChild = task_list.children;
	taskError = document.getElementById("task_error");
}

function dynamicElements()
{
	readElements();
	
	let taskItems, taskTick, taskValue;
	
	taskItems = document.createElement("li");
	taskItems.setAttribute("class", "task");

	taskTick = document.createElement("input");
	taskTick.setAttribute("type", "checkbox");

    taskValueData = taskInput.value.charAt(0).toUpperCase() + taskInput.value.substr(1).toLowerCase(); 
	taskValue = document.createTextNode(taskValueData);

	taskItems.appendChild(taskTick);
	taskItems.appendChild(taskValue);

	taskList.appendChild(taskItems);
    taskInput.value = "";

}
function taskNew()
{
	dynamicElements();
}
 */