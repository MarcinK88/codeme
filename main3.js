function mnozenie(x,y){
    let tablica = [];

    for(let i = 0; i < y; i++) {
        tablica[i] = [];
    }

    for (let i = 1; i <= x; i++) {
        for (let j = 1; j <= y; j++){
            tablica[i-1][j-1] = i*j;
        }
    }

return tablica;
}
var tablica = mnozenie(3,3);
console.log(tablica);


