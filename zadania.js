function parzyste(n) {

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}


// parzyste(11);

function fajnaFunc(...rest) {
    var table = [];
    for (let i = 0; i < (rest.length / 2); i++) {
        table[i] = [];
    }

    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < rest.length / 2; j++) {

            table[j][i] = rest[rest.length / 2 * i + j];

        }
    }
    return table;
}

console.log(fajnaFunc(1, 2, 3, 4, 5, 6, 7, 8));

