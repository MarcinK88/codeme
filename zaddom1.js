// zad 1
function multiply(a,b){
    return a*b;
}
console.log("Zadanie 1:")
var a = 4, b = 5;
console.log(a, " * ",b," = ",multiply(4,5));
console.log("-------")
// zad 2
function parzysta(a) {
    if (a % 2 == 0){
        return true;        
    } 
    else {
        return false
    }
}
var a = 56;
console.log("Zadanie 2:")
console.log("Czy ", a, " jest parzysta? ", parzysta(a));
console.log("------")

// zad 3
function sumRest(...rest) {
    var sum = 0;
    for (let i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
console.log("Zadanie 3:");
console.log(sumRest(3,4,5));
console.log("------")

// zad 4
function wypiszParzyste(...rest) {
    var parzysteTab = [];
    for (let i = 0; i < rest.length; i++) {
        if(parzysta(rest[i])){
            parzysteTab.push(rest[i]);
        }
    }
    return parzysteTab;
}
console.log("Zadanie 4:")
console.log(wypiszParzyste(3,4,5,6,7,8,9,234));