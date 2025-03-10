
const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(link => {
  
  if (link.href !== "http://google.com/") {
   
    link.addEventListener('click', (event) => {
      alert("clicked!");
      event.preventDefault(); 
    });
  }
});
