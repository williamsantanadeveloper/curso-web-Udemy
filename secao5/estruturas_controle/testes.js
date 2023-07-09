Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

function boletim(media) {
    if (media.entre(6, 10)) {
        console.log("Aprovado com média " .concat(media))
    }
    else if (media.entre(5, 5.9)) {
        console.log("Recuperação ".concat(media))
    }
    else if (media.entre(0, 4.9)){
        console.log("Reprovado ".concat(media))
    }
    else {
        console.log("Não conheço essa nota")
    }
}
boletim(6)
boletim(5.2)
boletim(4)






const pessoa = {
    nome: "William",
    idade: 18,
    endereco:  {
        rua: "Avenida",
        numero: 1350
    }
}
console.log(pessoa.endereco.rua)