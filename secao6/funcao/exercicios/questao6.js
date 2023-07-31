primaria = (capitalInicial, taxaDeJuros, tempoAplicacao) => {
    calculo_juros_simples = capitalInicial * taxaDeJuros * tempoAplicacao
    console.log(calculo_juros_simples)
}
primaria(1000, 0.14, 30)

secundaria = (capitalInicial, taxaDeJuros, tempoAplicacao) => {
    montante = capitalInicial * Math.pow(1 + taxaDeJuros, tempoAplicacao)
    console.log(montante)
}
secundaria(1000, 0.14, 30)
