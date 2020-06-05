var students = [

    ["Adam", "Bartek", "Jacek"],
    ["Krzysztof", "Marcin", "Zbyszek"],
    ["Michał", "Maciej", "Łukasz"]
]

// console.log(students[1][2]);

function addStudent(classNumber,name) {
    students[classNumber].push(name);
    students[classNumber].sort();
    
    return students[classNumber].indexOf(name);
}
console.log(addStudent(1,"Przemek"));
console.log(students);

function getStudent(classNumber, studentNumber) {
    return students[classNumber][studentNumber];
}

console.log(getStudent(1,2));
