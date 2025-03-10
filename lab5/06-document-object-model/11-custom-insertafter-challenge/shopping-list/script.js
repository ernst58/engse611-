function insertAfter(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
  }
  
  // New element to insert
  const li = document.createElement('li');
  li.textContent = 'Raw milk';
  
  // Existing element to insert after
  const firstItem = document.querySelector('li:first-child');
  
  // Our custom function
  insertAfter(li, firstItem);