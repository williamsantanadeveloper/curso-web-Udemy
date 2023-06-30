const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);

valores [4] = 10;
console.log(valores[4]);
console.log(valores.length); // Verificar a quantidade de elementos no Array

valores.push({id:3}, false, null, "teste"); // Adicionar coisas no Array
console.log(valores);

console.log(valores.pop()); // Retirar o ultimo elemento do array
delete valores[0] // Deletar algum elemento específico
console.log(valores)

console.log(typeof valores);