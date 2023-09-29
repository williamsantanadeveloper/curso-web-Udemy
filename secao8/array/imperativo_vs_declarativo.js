const students = [
    { name: 'João', note: 7.9 },
    { name: 'Maria', note: 9.2 }
];

// Imperativo
let total1 = 0;

for (let i = 0; i < students.length; i++) {
    total1 += students[i].note
};

console.log(total1 / students.length);

// Declarativo

const get_note = students => students.note;
const sum = (total, current) => total + current;
const total2 = students.map(get_note).reduce(sum);

console.log(total2 / students.length);

// select codigo, nome, email, from clientes where ativo = 1