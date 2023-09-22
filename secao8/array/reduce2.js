const students = [
    { name: 'João', note: 7.3, scholarship_holder: false },
    { name: 'Maria', note: 9.2, scholarship_holder: true },
    { name: 'Pedro', note: 9.8, scholarship_holder: false },
    { name: 'Maria', note: 8.7, scholarship_holder: true }
];

// Desafio 1: Todos os alunos são bolsistas?
const alunos_bolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(students.map(a => a.scholarship_holder).reduce(alunos_bolsistas));

// Desafio 2: Algum aluno é bolsista?

const algum_bolsista = (result, bolsista) => result || bolsista;
console.log(students.map(a => a.scholarship_holder).reduce(algum_bolsista));