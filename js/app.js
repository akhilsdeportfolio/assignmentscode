import navbar from "./navbar.js";



let div = document.createElement("div");
div.innerHTML=navbar();
document.body.prepend(div);



