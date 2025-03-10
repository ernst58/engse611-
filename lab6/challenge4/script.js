const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(link => {
 
  if (link.href !== "http://google.com/") {
  
    link.addEventListener('click', function(event) {
      alert(this.textContent);
      event.preventDefault(); 
    });
  }
});
