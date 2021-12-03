// ! CORE DELIVERABLES
// - type task into the input field - DONE
// - click some form of a submit button - DONE
// - see the task that was inputted in the DOM after submission - DONE

// ! ADVANCED DELIVERABLES
// - a delete dunction to remove tasks from list - DONE
// - select priority dropdown menu for each task - changes text color
// - additional input field -> user, duration, date due
// - ability to edit tasks
// - something crazzzaayyyy 

// ! GLOBAL VARIABLES

// find form 
const form = document.querySelector('#create-task-form');
// find input value
const userInput = document.querySelector('#new-task-description');
// find to do list
const todoList = document.querySelector('#tasks');

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', handleSubmitTodo);
});

// ! MAIN HANDLE FUNCTIONS
function handleSubmitTodo(e) {
  // prevent submit default action
  e.preventDefault();
  // create variable equal to input values 
  const newTask = userInput.value;

  // create new li element
  const taskEl = document.createElement('li')
  // create new button element
  const btn = document.createElement('button');
  // create priority dropdown
  const priorityDrop = document.createElement('select');
  // create priority options
  const priorityOptDefault = document.createElement('option');
  const priorityOpt1 = document.createElement('option');
  const priorityOpt2 = document.createElement('option');
  const priorityOpt3 = document.createElement('option');

  // set taskEl text to newTask
  taskEl.innerText = newTask;
  // set btn text
  btn.innerText = 'REMOVE';
  // set Dropdown text
  priorityDrop.innerText = 'Test';
  // set priority options text
  priorityOptDefault.innerText = 'Choose a priority level';
  priorityOpt1.innerText = 'High Priority';
  priorityOpt2.innerText = 'Medium Priority';
  priorityOpt3.innerText = 'Low Priority';

  // add event listener to button
  btn.addEventListener('click', handleRemove);
  // add event listener to dropdown
  priorityDrop.addEventListener('change', handleOption);

  // append taskEl to list
  todoList.appendChild(taskEl)
  // append priority dropdown to taskEl
  taskEl.append(priorityDrop);
  // append options to dropdown
  priorityDrop.appendChild(priorityOptDefault);
  priorityDrop.appendChild(priorityOpt1);
  priorityDrop.appendChild(priorityOpt2);
  priorityDrop.appendChild(priorityOpt3);
  // append delete btn to li
  taskEl.appendChild(btn);

  // reset form 
  form.reset();
}

// ! HELPER HANDLE FUNCTIONS
function handleRemove(e) {
  // prevent default action
  e.preventDefault();
  // remove parent li from list 
  e.target.parentNode.remove();
}

function handleOption(e) {
  let optionValue = e.target.value;
  if (optionValue === 'High Priority') {
    e.target.parentNode.style.color = 'red';
  } else if (optionValue === 'Medium Priority') {
    e.target.parentNode.style.color = 'yellow';
  } else if (optionValue === 'Low Priority') {
    e.target.parentNode.style.color = 'green';
  }
}