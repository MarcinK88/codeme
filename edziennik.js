//definicja studenta
function student(name) {
    this.name = name;
    this.grades = {
        biology: [],
        math: [],
        english: [],
    }   
}
//tworzymy 2 klasy po 3 uczniow
var students = [
    [new student("Adam"), new student("Krzysztof"), new student("Michal")],
    [new student("Marcin"), new student("Przemek"), new student("Sebastian")],
   
]

//dodawanie studenta do klasy, sortowanie
function addStudent(classNumber,name) {
    students[classNumber].push(new student(name));
    students[classNumber].sort(function(a,b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    
    return students[classNumber].indexOf(name);
}


function getStudent(classNumber, studentNumber) {
    return students[classNumber][studentNumber];
}


//dodawanie oceny
function addGrade(classNumber,studentNumber,subject,grade) {
    
    students[classNumber][studentNumber].grades[subject].push(grade);
}

//pokazywanie ocen
function showGrades(classNumber, studentNumber) {

    console.log("student:", students[classNumber][studentNumber].name);
    console.log("math:", students[classNumber][studentNumber].grades.math, "average:", average(students[classNumber][studentNumber].grades.math) );
    console.log("biology:", students[classNumber][studentNumber].grades.biology, "average:", average(students[classNumber][studentNumber].grades.biology) );
    console.log("english:", students[classNumber][studentNumber].grades.english, "average:", average(students[classNumber][studentNumber].grades.english) );
}

function average(grades) {
    var sum = 0;
    for (let i = 0; i < grades.length; i++ ){
        sum += grades[i];
    }

    return sum / grades.length;
}

//testy
addStudent(0,"Lukasz");
console.log(students[0]);
addGrade(0,0,"math",2);
addGrade(0,0,"math",4);
addGrade(0,0,"math",3);
addGrade(0,0,"biology",4);
addGrade(0,0,"biology",5);
addGrade(0,0,"biology",2);
addGrade(0,0,"english",4);
showGrades(0,0);

