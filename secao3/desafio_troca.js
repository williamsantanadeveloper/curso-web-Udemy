let a = 7;
let b = 94;

let temporario = a;

a = b;
b = temporario;

// Recurso: [a, b] = [b, a]

// depois da troca... a = 94 e b = 7

console.log(a);
console.log(b);
