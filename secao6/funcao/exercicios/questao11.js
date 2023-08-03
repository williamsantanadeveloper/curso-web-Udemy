calculo_ano_bissexto = (numero) => {
    let quatro_em_quatro_anos = (numero % 4 == 0) ? true : false

    let cem_em_cem_anos = (numero % 100 == 0) ? false : true

    let quatrocentos_em_quatrocentos_anos = (numero % 400) ? true : false
    
    console.log(quatro_em_quatro_anos, cem_em_cem_anos, quatrocentos_em_quatrocentos_anos)
}
calculo_ano_bissexto(100)