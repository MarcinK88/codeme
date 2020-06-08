// zad 1 - silnia
console.log("Zad 1")
function silnia(){
    let a = 0;
    return function(){
    let pow = 1;
        for (let i = 1; i <= a; i++){
            pow *= i;
        }
        console.log(a++,"! = ", pow);
    
    }
}

var silniaF = silnia();
silniaF();
silniaF();
silniaF();

// zad 2 - Super sum ver. 1
console.log("Zad 2 ver 1")
function superSumGen(){

    let superSum = 0;

    return function(...args){

        for(let i = 0; i < args.length; i++){
            superSum += args[i];
        }

        console.log(superSum);
        return superSumGen(args); 
    }
}


var superSum = superSumGen();
superSum(1,2)(3)(14,17);
superSum(1);

// zad 2 - Super sum ver. 2
console.log("zad 2 ver. 2")
function superSumGen2(){

    let superSum = 0;

    return function(...args){

        for(let i = 0; i < args.length; i++){
            superSum += args[i];
        }

        console.log(superSum);
    }
}


var superSum2 = superSumGen2();
superSum2(1,2);
superSum2(3);
superSum2(14,17);
superSum2(1);