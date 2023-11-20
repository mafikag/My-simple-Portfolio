let show = document.getElementById("show");
let hide = document.getElementById("hide");
let text = document.querySelectorAll("div.hide");

function Show() {
  show.style.display = "none";
  hide.style.display = "block";
  text.forEach((item) => {
    item.classList.add("off");
  });
}

function Hide() {
  hide.style.display = "none";
  show.style.display = "block";
  text.forEach((item) => {
    item.classList.remove("off");
  });
}
