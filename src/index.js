document.addEventListener("DOMContentLoaded", () => {
  // create variable for desired element
  const form = document.querySelector('form')
  // add event listener to form
  form.addEventListener('submit', (e) => {
    // prevent default action for submit action 
    e.preventDefault();
    // pass callback function to modify to-do list
    buildToDo(e.target.new_task_description.value);
    // reset form input field after each task is created
    form.reset();
  })
});

function buildToDo(toDo) {
  // create new element from input 
  let li = document.createElement('li');
  // create delete button for new task
  let btn = document.createElement('button');

  // create dropdown for priority selection
  let priority = document.createElement('select');
  // create dropdown options and content
  let selectPlaceholder = document.createElement('option');
  selectPlaceholder.textContent = 'Choose Task Priority';
  let highPriority = document.createElement('option');
  highPriority.textContent = 'Red - High';
  let medPriority = document.createElement('option');
  medPriority.textContent = 'Yellow - Medium';
  let lowPriority = document.createElement('option');
  lowPriority.textContent = 'Green - Low';

  // append options to dropwdown
  priority.appendChild(selectPlaceholder);
  priority.appendChild(highPriority);
  priority.appendChild(medPriority);
  priority.appendChild(lowPriority);

  // add event listener to delete button
  btn.addEventListener('click', handleDelete);
  // assign button content
  btn.textContent = ' x ';

  // assign content to li
  li.textContent = `${toDo}  `
  // append button to new task
  li.appendChild(btn);
  // append dropdown to new task
  li.appendChild(priority);

  // add event listener to dropdown
  priority.addEventListener('change', handlePriority);

  // select element to add new tasks to
  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

function handlePriority(e) {
  console.log(e.target.value)
  if (e.target.value === 'Red - High') {
    e.target.parentNode.style.color = 'red';
  } else if (e.target.value === 'Yellow - Medium') {
    e.target.parentNode.style.color = 'yellow';
  } else if (e.target.value = 'Green - Low' ) {
    e.target.parentNode.style.color = 'green';
  }
}