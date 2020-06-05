function checkVar() {
    var testVar = 30;
    console.log("przed if'em", testVar);
    if(true){
        var testVar = 80;
        console.log("w if'ie ", testVar);
    }
    console.log("za if'em", testVar);
}

// console.log("przed funkcja", testVar);
// checkVar();
// console.log("za funkcja", testVar);

// function checkLet(){
//     let testLet = 1000;
//     console.log("przed ifem", testLet);
//     if(true) {
//         let testLet = 2000;
//         console.log("w ifie ", testLet);
//     }

//     console.log("za ifem", testLet);
// }
// checkLet();


// var x = 5;
// var y = 10;
// var z = 13;
// var prawda = true;

// console.log(x + y);
// console.log(y % x);
// console.log(z % x);
// console.log(x && y);
// console.log(y && prawda);
// console.log(y && !prawda);


// var zmienna = 12;
// if(zmienna == 5){
//     console.log("zmienna jest 5");
// }else{
//     console.log("zmienna nie jest 5");
// }

// switch (zmienna) {
//     case 5:
//         console.log("jest fajnie");
//         break;
    
//     case 6:
//         console.log("ładna pogoda");
//         break;
//     case 12:
//         console.log("grudzien");
//         break;
//     default:
//         console.log("nie udalo sie dopasowac")
//         break;
// }


// var warunek = true;
// var i = 0;
// while(warunek) {

//     console.log("przygotuj kubek", ++i);
//     console.log("Wrzuc saszetke herbaty do kubka");
//     console.log("Zalej kubek gorąca wodą");
//     if(i > 5) {
//         warunek = false;
//     }
// }

// for (let index = 0; index < 5; index++) {
//     console.log("przygotuj kubek", index);
//     console.log("Wrzuc saszetke herbaty do kubka");
//     console.log("Zalej kubek gorącą wodą");
// }




// function tuBedzieNazwaNaszejFunkcji(){
//     console.log("robie herbate");
//     console.log("herbate w kubku");
// }

// var czyKawa = true;
// if (czyKawa){
//     tuBedzieNazwaNaszejFunkcji();
// }

// var wyrazenie = function(){
//     console.log("hahah");
// }

// console.log(wyrazenie);


function sum(a=0, b=0, c=0){
    return a+b+c;
}

function sumRest(a=0, ...rest){
    console.log(rest);
}

var result = sum(1,2);
console.log(result);
sumRest(1,2,3,4,5,6,7,8);