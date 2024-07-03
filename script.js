function welcome() {
    let text = document.getElementById("sub");
    let name = document.getElementById("name").value
    text.innerHTML = "Thank You for Contacting us " + name;
    text.style.backgroundColor = "rgb(235, 114, 114)";
    text.style.color = "black";
}

let modeBtn = document.querySelector("#color");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        //     document.querySelectorAll("section").forEach(section => {
        //         section.style.backgroundColor = "rgb(185, 244, 244)";
        //     });
        // document.querySelectorAll("section").forEach(section => {
        //     section.style.color = "white";
        // })
        document.querySelectorAll(".bio").forEach(bio => {
            bio.style.color = "white";
        });
    }
    else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelectorAll(".bio").forEach(bio => {
            bio.style.color = "black";
        });
        // document.querySelector("body").style.color = "black";
    }
}
);

