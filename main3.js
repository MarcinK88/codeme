function mnozenie(x,y){
    let tablica = [];

    for(let i = 0; i < y; i++) {
        tablica[i] = [];
    }

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++){
            tablica[i][j] = i*j;
        }
    }

return tablica;
}
var tablica = mnozenie(4,4);
console.log(tablica);


