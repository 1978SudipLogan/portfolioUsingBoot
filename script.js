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


// function showBio() {
//     document.querySelectorAll('.bio').forEach(section => {
//         if (window.innerWidth <= '600') {
//             section.style.fontSize = '1.7em';
//             section.style.textAlign = 'center';
//             section.style.position = 'relative';
//             section.style.left = '60px';
//             section.style.top = '80px';
//             section.style.width = '80vw';
//         }
//         else {
//             section.style.fontSize = '';
//             section.style.textAlign = '';
//             section.style.position = '';
//             section.style.left = '';
//             section.style.top = '';
//         }
//     })


//     document.querySelectorAll('.styling_navbar').forEach(section => {
//         if (window.innerWidth < 600) {
//             section.style.fontSize = '0.6em';
//             // section.style.marginLeft = '5px';
//             section.style.margin = '2px';
//             section.style.width = '350px'
//             section.style.position = 'absolute';
//             section.style.right = '55px';
//         }
//         else {
//             section.style.fontSize = '';
//             // section.style.marginLeft = '5px';
//             section.style.margin = '';
//             section.style.width = ''
//             section.style.position = '';
//             section.style.right = '';
//         }
//     })

// }





// window.addEventListener('load', showBio);
// window.addEventListener('resize', showBio);