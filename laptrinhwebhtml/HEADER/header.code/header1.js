document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener("mouseenter", function() {
            this.getElementsByClassName("dropdown-content")[0].style.display = "block";
        });
        dropdowns[i].addEventListener("mouseleave", function() {
            this.getElementsByClassName("dropdown-content")[0].style.display = "none";
        });
    }
});
