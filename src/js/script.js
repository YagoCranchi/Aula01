const mask = document.getElementById("mask");
const dialog = document.getElementById("dialog");

function openDialog() {
    mask.classList.add("active");
    dialog.style.display = "block";
}

function closeDialog() {
    mask.classList.remove("active");
    dialog.style.display = "";
}