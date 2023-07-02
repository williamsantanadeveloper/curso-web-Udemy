// Escopo: É o contexto atual de execução, em que valores e expressões são "visíveis" ou podem ser referenciadas. Se uma variável ou outra expressão não estiver "no escopo atual", então não está disponível para uso.
// Quando criar uma variável fora de uma função ela é global, ela estará dentro do window
// O problema de ter variáveis globais em JS é que todas vão parar no mesmo local 
// Tipos de variáveis var: Global / Escopo de função

// Global
{
    {{{ var sera = "Será????" 
    console.log(sera)
}
}
}
}
console.log(sera)

// Escopo de função
function teste(){
    var local = 123
    console.log(local)
}
teste()
console.log(local) // Erro