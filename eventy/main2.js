let ileButtonow = 5;

for(var i = 0; i < ileButtonow; i++) {
    var button = document.createElement("BUTTON");
    button.innerText = "button " + i;
    button.dataset.count = 0;
    button.id = i;
    document.body.appendChild(button);
}

var buttons = document.querySelectorAll("BUTTON");

var sumClick = document.createElement("label");

var labelsCount = [];

for (let i = 0; i < buttons.length; i++){
    labelsCount[i] = document.createElement("label");
    labelsCount[i].id = i;
    labelsCount[i].innerText = buttons[i].dataset.count;
    document.body.appendChild(labelsCount[i]);

}


sumClick.innerText = 0;
document.body.appendChild(sumClick);

function onClick(event) {
    event.target.dataset.count++;
    var label = document.querySelectorAll(`label[id="${event.target.id}"]`);
    labelsCount[event.target.id].innerText = event.target.dataset.count;  
    sumClick.innerText++;  
}

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', onClick);
}

