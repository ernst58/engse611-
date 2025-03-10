
let paragraphs = document.querySelectorAll('#main p');


paragraphs.forEach(p => {
  
  if (p.textContent === "Llamas and Chickens!") {
    
    p.style.color = 'red';
  }
});
