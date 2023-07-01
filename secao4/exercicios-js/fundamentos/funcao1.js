// Função sem retorno
// Uma função é um bloco de código que executa uma tarefa e pode ser chamado e reutilizado várias vezes. Na programação, uma função é uma subrotina usada em um programa. 

function imprimirSoma(a, b, c) {
    console.log(a + b + c);
}
imprimirSoma(2, 3, -1);
imprimirSoma(2);
imprimirSoma(2, 10, 4, 5, 6, 7, 8);
imprimirSoma();

// Função com retorno

function soma(a, b=1) {
    return a + b
}
console.log(soma(2, 3));
console.log(soma(2));
console.log(soma())