const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

approved.forEach(function (name, index) {
    console.log(`${index + 1}) ${name}`)
})
// a função call back que passa para o forEach ela só pode receber 3 parâmetros(nome, indice, array)
approved.forEach(name => console.log(name))

const show_approved = approved => console.log(approved)
console.log('----------')
approved.forEach(show_approved)