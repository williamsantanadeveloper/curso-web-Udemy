function tratarErroElancar(erro) {
    //throw new Error('...')
    // throw 10
    // throw true
    // throw "mensagem"
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
   try {
 console.log(obj.name.toUpperCase() + '!!!')
   } catch(e){
    tratarErroElancar(e)
   } finally{
    console.log('final')
   }
}

const obj = { nome: "Roberto" }
imprimirNomeGritado(obj)

// try é um bloco que potencialmente pode gerar algum tipo de erro
// finally sempre será executado dando erro ou não
/* 
Quando você coloca um bloco de código em um "try", você está dizendo ao JavaScript para tentar executar esse bloco de código. Se algum erro ocorrer durante a execução desse bloco, o JavaScript irá lançar uma exceção.

Aqui entra o papel do "catch". O bloco de código dentro do "catch" é executado apenas se uma exceção for lançada no bloco "try". Ele permite que você capture e lide com a exceção de forma apropriada, em vez de permitir que ela cause a interrupção do programa ou exiba mensagens de erro indesejadas ao usuário.

*/

/* 
 Throw é usado para lançar (ou gerar) uma exceção manualmente. Quando você encontra uma situação inesperada ou um erro no seu código, você pode usar o "throw" para sinalizar que ocorreu um problema e interromper a execução normal do programa.
 */