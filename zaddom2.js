// zad 1 - silnia
function silnia(){
    let licznik = 0;
    let wynik = 1;

    return function(){
        licznik +=1;
        wynik *= licznik;
        console.log(licznik, wynik);
        return wynik;
    }
}

var silniaF = silnia();
// silniaF();
// silniaF();
// silniaF();
// silniaF();
// silniaF();

// zad 2 - Super sum ver. 1
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
// superSum(1,2)(3)(14,17);
// superSum(1);

// zad 2 - Super sum ver. 2
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
// superSum2(1,2);
// superSum2(3);
// superSum2(14,17);
// superSum2(1);

// ver 3
function sum(...rest){
    let result = 0;
    for (let i = 0; i < rest.length; i++) {
        result = result + rest[i];
        console.log('subsum', result, 'argument', rest[i]);
        
    }
    return result;
}

function genSum(){
    let wynik = 0;

    const subsum = function(...rest){
        for (let i = 0; i < rest.length; i++) {
            wynik = wynik + rest[i];            
        }
        console.log(wynik);
        return subsum;
    }
    return subsum;
}

// let supersum = genSum();
// let wynikSuper = supersum(1,2,3,4,5);
// supersum(1,2,3,4,5)(1,2,3,4,5);
// supersum(1,2,3,4,5);

// silnia rekurencja
function kolejnaSilnia(n){

    if(n <= 1){
        console.log(n);
        return n;
    }
    else{
        var silnia = n * kolejnaSilnia(n - 1); 
        console.log(silnia);
        return silnia;
    }
}
kolejnaSilnia(7);