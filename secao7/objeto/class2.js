class avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class pai extends avo {
    constructor(sobrenome, profissao = 'professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends pai {
    constructor() {
        super('Silva')
    }
}
const avo1 = new avo('alberto')
const pai1 = new pai
const filho1 = new filho
console.log(filho1)
console.log(pai1)
console.log(avo1)