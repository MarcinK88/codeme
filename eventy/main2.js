for(var i = 1; i <= 3; i++) {
    var button = document.createElement("BUTTON");
    button.innerText = "button " + i;
    button.dataset.count = 0;
    document.body.appendChild(button);
}

var buttons = document.querySelectorAll("BUTTON");

var sumClick = document.createElement("label");

var labelsCount = [];

for (let i = 0; i < buttons.length; i++){
    labelsCount[i] = document.createElement("label");
    labelsCount[i].innerText = buttons[i].dataset.count;
    document.body.appendChild(labelsCount[i]);

}


sumClick.innerText = "test";
document.body.appendChild(sumClick);

function onClick(event) {
    event.target.dataset.count++;
    console.log(event.target);
    
}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onClick);
}

