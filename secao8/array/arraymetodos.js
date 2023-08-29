const drivers = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
drivers.pop(); // massa quebrou o carro // remove o ultimo elemento do array 
console.log(drivers);

drivers.push('Verstappen'); // adiciona elementos ao array
console.log(drivers);

drivers.shift(); //remove o primeiro elemento da lista!
console.log(drivers);

drivers.unshift('Hamilton'); // adiciona um elemento no índice 0
console.log(drivers);

// splice pode adicionar e remover itens
drivers.splice(2, 0, 'Bottas', 'Massa');
console.log(drivers);

// remover
drivers.splice(3, 1) //Massa quebrou novamente
console.log(drivers)

const things_drivers = drivers.slice(2); // novo array
console.log(things_drivers);

const things_drivers2 = drivers.slice(1, 4); // verstappen não aparece
console.log(things_drivers2);