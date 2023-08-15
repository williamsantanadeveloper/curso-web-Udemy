Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}


plano_de_saude = (idade, pagamento = 100) => {
    if (idade < 10) {
        console.log(pagamento + 80)
    }
    else if (idade.entre(10, 30)) {
        console.log(pagamento + 50)
    }
    else if (idade.entre(31, 60)) {
        console.log(pagamento + 95)
    }
    else if(idade > 60) {
        console.log(pagamento + 130)
    }
    else {
        console.log('Não identificamos em que plano de saúde se enquadra')
    }
}
plano_de_saude(10)
plano_de_saude(9)
plano_de_saude(55)
plano_de_saude(61)