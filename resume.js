// Global variable to store the original section names
var originalSectionNames = {};

// Function to enable editing
function enableEdit(button) {
  var sectionName = button.parentNode.querySelector('.section-name');
  sectionName.contentEditable = true;
  sectionName.focus();
  button.setAttribute('disabled', 'disabled');
  button.classList.add('disabled');
  sectionName.addEventListener('blur', function() {
    sectionName.contentEditable = false;
    button.removeAttribute('disabled');
    button.classList.remove('disabled');
    checkChanges(); // Check if any changes were made
  });
}

// Function to toggle section visibility
function toggleSection(checkbox) {
  var sectionName = checkbox.parentNode.parentNode.querySelector('.section-name');
  if (checkbox.checked) {
    sectionName.classList.remove('disabled');
  } else {
    sectionName.classList.add('disabled');
  }
  checkChanges(); // Check if any changes were made
}

// Function to show description
function showDescription(icon) {
  var description = icon.parentNode.querySelector('.section-description');
  description.style.display = 'block';
}

// Function to hide description
function hideDescription(icon) {
  var description = icon.parentNode.querySelector('.section-description');
  description.style.display = 'none';
}

// Function to check if any changes were made
function checkChanges() {
  var saveButton = document.getElementById('save-button');
  var sections = document.querySelectorAll('.sortable-item');
  var changesMade = false;
  
  sections.forEach(function(section) {
    var sectionName = section.querySelector('.section-name');
    var originalSectionName = originalSectionNames[sectionName.innerText];
    
    if (sectionName.innerText !== originalSectionName) {
      changesMade = true;
    }
  });
  
  if (changesMade) {
    saveButton.removeAttribute('disabled');
  } else {
    saveButton.setAttribute('disabled', 'disabled');
  }
}

// Function to save changes
function saveChanges() {
  var sections = document.querySelectorAll('.sortable-item');
  
  sections.forEach(function(section) {
    var sectionName = section.querySelector('.section-name');
    originalSectionNames[sectionName.innerText] = sectionName.innerText;
  });
  
  var saveButton = document.getElementById('save-button');
  saveButton.setAttribute('disabled', 'disabled');
  
  // Perform the save action (e.g., send data to server)
  // ...
}
