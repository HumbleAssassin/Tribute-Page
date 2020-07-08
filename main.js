var navbtn = document.getElementById("navbtn");
var dropdown = document.getElementById("dropdown-list");
function openmenu() {
    if (dropdown.style.display == "block") {
        dropdown.style.display = "none";
        navbtn.innerHTML = "<li class='fa fa-bars'></li>"
    } else {
        dropdown.style.display = "block";
        navbtn.innerHTML = "<li class='fa fa-close'></li>"
    }

}