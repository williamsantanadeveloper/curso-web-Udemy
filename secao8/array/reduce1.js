const students = [
    { name: 'João', note: 7.3, scholarship_holder: false },
    { name: 'Maria', note: 9.2, scholarship_holder: true },
    { name: 'Pedro', note: 9.8, scholarship_holder: false },
    { name: 'Maria', note: 8.7, scholarship_holder: true }
];

console.log(students.map(a => a.note));

const result = students.map(a => a.note).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10); // O 10 está como o primeiro elemento das notas

console.log(result);