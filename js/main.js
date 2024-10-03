// Enter your code below.

let showResourcesButton = document.getElementById('show-resources');
let resourcesDiv = document.querySelector('.javascript-resources');

// Step 1
showResourcesButton.addEventListener('click', () => {
  resourcesDiv.classList.remove('d-none');
});
