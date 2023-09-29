const school = [{
    name: 'Turma M1',
    students: [{
        name: 'Gustavo',
        note: 8.1
    }, {
        name: 'Ana',
        note: 9.3
    }]
}, {
    name: 'Turma M2',
    students: [{
        name: 'Rebeca',
        note: 8.9
    }, {
        name: 'Roberto',
        note: 7.3
    }]
}];

const get_nota_do_aluno = student => student.note;
const get_notas_da_turma = turma => turma.students.map(get_nota_do_aluno);

const notas1 = school.map(get_notas_da_turma);
console.log(notas1);

console.log([].concat([8.1, 9.3], [8.9, 7.3]));

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))
};
const notas2 = school.flatMap(get_notas_da_turma);
console.log(notas2);