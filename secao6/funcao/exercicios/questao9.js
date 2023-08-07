const arredondar = (nota) => {
    return Math.ceil(nota / 5) * 5
}

verificar_nota = (nota) => {
    let nota_arredondada = arredondar(nota)
    if(nota >= 40) {
        if((nota_arredondada - nota)<3){
            nota = nota_arredondada
        }
        console.log('Aluno aprovado!')
        console.log('Nota: ' + nota)
    }
    else if (nota >= 38) {
        console.log('Nota: ' + arredondar(nota))
        console.log('Aluno aprovado')
    }
    else if (nota < 38) {
        console.log('Aluno reprovado!')
    }
    else {
        console.log('Erro, verifique os dados e insira novamente')
    }
}
verificar_nota(55)