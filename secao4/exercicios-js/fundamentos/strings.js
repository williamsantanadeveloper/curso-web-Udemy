const escola = "Cod3r";

console.log(escola.charAt(4)); // Mostrar a caractere que está no índice 4
console.log(escola.charAt(5)); // "Erro"
console.log(escola.charCodeAt(3)); // Valor da tabela latis
console.log(escola.indexOf("3")); //
console.log(escola.substring(1)); // Começar a escrever a partir do índice 1
console.log(escola.substring(0, 3)); // Começar do 0 e ir até o 3
console.log("Escola ".concat(escola).concat("!")); // Concatenação(adicionar algo no código)
console.log(escola.replace(3, "e")); // Replace: trocar elementos no código
console.log(escola.replace(/\w/g, "e")); // trocar todos os elementos pela letra e
console.log("Ana,Maria,Pedro".split(","));