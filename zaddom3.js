function isValidPesel(pesel) {

    let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;
    let controlNumber = parseInt(pesel.substring(10, 11));

    if (controlNumber === 0) {
        console.log("incorrect PESEL");
        return false;  
    }

        for (let i = 0; i < weight.length; i++) {
            sum += (parseInt(pesel.substring(i, i + 1)) * weight[i]);
        }

        sum = sum % 10;
        if (10 - sum === controlNumber) {
            console.log("PESEL has been changed")
            return true;
        } else {
            console.log("incorrect PESEL");
            return false;
        }

}

function HumanV2(name, surname, dateOfBirth, sex, pesel, addressStreet, addressNumber, addressCity){
    this.name = name;
    this.surname = surname;
    this.sex = sex;
    this.dateOfBirth = new Date(dateOfBirth);
    this.pesel = pesel;
    this.street = addressStreet,
    this.city = addressCity,
    this.number = addressNumber,
    this.introduce = function(){
        console.log(this.name, this.surname, "from", this.street, this.number, this.city);
    };
    this.whereIFrom = function() {
        console.log(this.street, this.number, this.city);
    };

    this.getPesel = function() {
        console.log(this.pesel);
    };

    this.howOldAmI = function() {
        var today = new Date();
        var age = today.getFullYear() - this.dateOfBirth.getFullYear();
        if ( (today.getMonth() < this.dateOfBirth.getMonth()) || (today.getMonth() == this.dateOfBirth.getMonth() && (today.getDate() < this.dateOfBirth.getDate()))) {
            age--;
        }
        console.log(age);
    };
}

HumanV2.prototype.setPesel = function (pesel) {
        if (isValidPesel(pesel)) {
            this.pesel = pesel;
        }
}

var p1 = new HumanV2("Jan", "Kowalski", "2000-08-05", "Male", "97031003029", "Glowna", 1, "Gdansk");

p1.introduce();
p1.whereIFrom();
p1.howOldAmI();
p1.setPesel("97031003029");  //correct PESEL
p1.setPesel("97031003021");  //inorrect PESEL
