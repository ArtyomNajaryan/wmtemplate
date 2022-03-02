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

/*** Language menu toggle*/
var langmenu = document.getElementById("LangMenuToggle");
var mainmenu = document.getElementById("LangMenuToggle");

//langmenu.addEventListener("click", togglemenu('LangMenu'));

document.getElementById("LangMenuToggle").onclick = function() {togglemenu('LangMenu')};
document.getElementById("menuToggle").onclick = function() {togglemenu('mobile-menu')};



function togglemenu(elmnt) {
  var element = document.getElementById(elmnt);
  element.classList.toggle("hidden");

if (elmnt == "mobile-menu") {
  element.classList.toggle("opacity-50");
  element.classList.toggle("top-20");
}
}


  
document.addEventListener('click', function(e) {
  var bodyclick = document.getElementById('LangMenuToggle');

  if (!bodyclick.contains(e.target)) {
    if(document.getElementById("LangMenu").classList != 'hidden'){
      document.getElementById("LangMenu").classList.add("hidden");
    }
  
  }
});

document.addEventListener('click', function(e) {
  var bodyclick = document.getElementById('menuToggle');

  if (!bodyclick.contains(e.target)) {
    if(document.getElementById("mobile-menu").classList != 'hidden'){
      document.getElementById("mobile-menu").classList.add("hidden");
    }
  
  }
});

