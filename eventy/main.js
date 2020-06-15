for(var i = 1; i <= 5; i++) {
    var button = document.createElement("BUTTON");
    button.innerHTML = "button " + i;
    document.body.appendChild(button);
}

var div = document.createElement("div");
div.style.height = "100px";
div.style.width = "100px";
div.style.backgroundColor = "red";


var handler = setInterval(function () {
    if(div.style.backgroundColor === "red") {
       div.style.backgroundColor = "blue";
    } else {
       div.style.backgroundColor = "red";
    }
}, 1000)

document.body.appendChild(div);


for(var i = 1; i <= 5; i++) {
    var par = document.createElement("p");
    par.innerHTML = "paragraf " + i;
    document.body.appendChild(par);
}

var paragraphs = document.querySelectorAll("p");

paragraphs[0].style.backgroundColor = "green";
paragraphs[2].style.backgroundColor = "blue";
paragraphs[paragraphs.length-1].style.backgroundColor = "yellow";