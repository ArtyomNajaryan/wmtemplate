let elements = document.getElementsByClassName('wm-portfolio-link');
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', wmportfolio, false);
}

function wmportfolio() {
   var id = this.dataset.id;
   let ports = document.getElementsByClassName('wm-port');
        for (var i = 0; i < ports.length; i++) {
            ports[i].style.display = "none"
        }

   document.getElementById('portfoloio-'+id).style.display = "inline"

  }


  
  
  function wmLanguage(){
    let x = document.getElementById("LangMenu");
    if (x.style.display === "none") {
      x.style.display = "inline";
    } else {
      x.style.display = "none";
    }
  }
 
  function mobileMenu(){
    let x = document.getElementById("mobile-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }