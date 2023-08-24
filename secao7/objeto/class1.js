class lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome,
            this.valor = valor
    }
}

class ciclo_financeiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    add_lancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valor_consolidado = 0
        this.lancamentos.forEach(l => {
            valor_consolidado += l.valor
        })
        return valor_consolidado
    }
}

const salario = new lancamento('Salário', 45000)
const conta_de_luz = new lancamento('Luz', -220)

const contas = new ciclo_financeiro(6, 2018)
contas.add_lancamento(salario, conta_de_luz)
console.log(contas.sumario())