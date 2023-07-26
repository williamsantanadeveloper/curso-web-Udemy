// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
    // Esse tipo de função foge do escopo global
    // Pode adicionar funções, variáveis, constantes...
})()
