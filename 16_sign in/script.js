const toggle = document.getElementsByClassName("toggle-password");
const input = document.getElementById("password");

toggle.addEventListener("click", function () {
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
});
