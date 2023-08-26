console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo'; // adicionando um elemento para o array
aprovados.push('Abia'); // adicionando um elemento para o array
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort() // colocando o array em ordem
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana'];
// aprovados.splice(1, 1): a partir do indice 1 remova um item
// aprovados.splice(1, 0): a partir do indice 1 não remova nenhum item
// aprovados.splice(1, 0, 'Elemento1', 'Elemento2'): a partir do indice 1 não remova nenhum item e adicione elemento1 e 2
aprovados.splice(1, 2, 'Elemento1', 'Elemento2');
// adiciona, remove em determinado indice e remove,  adiciona ao mesmo tempo
// 1ª parâmetro: indice que quer trabalhar , 2ª parâmetro: quantidade de elementeos que você quer excluir
// Ex: aprovados.splice(1, 2, 'Elemento1', 'Elemento2'): 1º paramentro: no indice 1, 2: remova dois itens, 3....4: adicione elemento1 e elemento2
console.log(aprovados);