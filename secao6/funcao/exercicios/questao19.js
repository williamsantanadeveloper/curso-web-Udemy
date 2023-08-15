cardapio = (codigo) => {
    switch (codigo) {
        case 100: console.log('Cachorro quente, valor a ser pago é 3 reais')
            break
        case 200: console.log('Hamburguer simples o valor a ser pago é R$ 4,00')
            break
        case 300: console.log('Cheeseburguer o valor a ser pago é R$ 5,50')
            break
        case 400: console.log('Bauru o valor a ser pago é R$ 7,50')
            break
        case 500: console.log('Refrigerante o valor a ser pago é R$3,50')
            break
        case 600: console.log('Suco o valor a ser pago é R$ 2,80')
            break
        default: console.log('Item não encontrado')

    }
}
cardapio(100)
cardapio(200)
cardapio(300)
cardapio(400)
cardapio(500)
cardapio(600)