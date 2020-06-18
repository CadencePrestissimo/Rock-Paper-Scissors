document.querySelector(".winner").style.display="blank";
document.addEventListener("onclick", myFunction);

function myFunction() {
  document.querySelector(".rock").style.display = "none";
}

function removeHandler() {
  document.removeEventListener("onclick", myFunction);
}
