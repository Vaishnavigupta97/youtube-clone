const navInputBar = document.getElementById("navInputBar");
navInputBar.addEventListener("focus", inputOutline);
function inputOutline(){
    navInputBar.style.border = "1px solid blue";
    console.log("mk");
}



