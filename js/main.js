// Enter your code below.

let showResourcesButton = document.getElementById('show-resources');
let resourcesDiv = document.querySelector('.javascript-resources');

// Step 1

showResourcesButton.addEventListener('click', () => {
  resourcesDiv.classList.remove('d-none');
});

// Step 2

resourcesDiv.addEventListener('mouseover', (event) => {
    console.log(event.target); 
    let listItem = event.target.closest('.list-group-item');
    if (listItem) {
      listItem.classList.add('fw-bold');
    }
  });