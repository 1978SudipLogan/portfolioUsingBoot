function welcome() {
    let name = document.getElementById("name").value
    text.innerHTML = "Thank You for Contacting us, " + name;
    let text = document.getElementById("sub");
    text.style.backgroundColor = "rgb(235, 114, 114)";
    text.style.color = "black";

}