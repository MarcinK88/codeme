// zad 1
function parzyste(n) {

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}


// parzyste(11);

// zad 2
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

// console.log(fajnaFunc(1, 2, 3, 4, 5, 6, 7, 8));

// zad 3
function rekur(n) {

    if (n >= 0 && n < 3) {
        return n + 1;
    } else {
        return rekur(n - 1) * n + rekur(n - 2) / rekur(n - 3);
    }
}

// console.log(rekur(2));

// zad 4
table = [{ name: "jarek", surname: "wul", id: 1 }, { name: "Andrzej", surname: "Kopio", id: 23 }];

function dodajOsobe(id, name, surname) {
    table.push({ name, surname, id });

}

function usunOsobe(id) {
    table = table.filter(function (e) {
        return e.id !== id;
    })
}

function wyswietl() {
    console.log(table);
}

// usunOsobe(23);
// dodajOsobe(4, "Andrzej", "Nowak");
// wyswietl();

// zad 5
class Alert {
    constructor() {
        this.handler = [];
    }

    wyswietlAlert(id, tekst, sec) {
        this.handler[id] = setTimeout((function () {
            console.log(tekst);
        }), sec * 1000);
    }

    anulujAlert(id) {
        clearTimeout(this.handler[id]);
    }
}

const alert1 = new Alert()

alert1.wyswietlAlert(10, "alert1", 5);
alert1.wyswietlAlert(20, "alert2", 3);
alert1.wyswietlAlert(15, "alert3", 4);
alert1.anulujAlert(15);
