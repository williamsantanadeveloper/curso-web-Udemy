const fabricantes = new Object
fabricantes.nomes = ['Willams', 'Mercedes', 'Ferrari']
fabricantes.nomes_dos_pilotos = ['Hamilton', 'Alonso']
console.log(fabricantes)

function funcionario (nome) {
    this.nome = nome
    console.log(`O nome do meu funcionário é ${this.nome}`)
}
const chamar = new funcionario('William')
console.log(chamar)

function pproduto (salario, imposto) {
    return {
        salario,
        get_salario_com_imposto() {
            return salario * (1- imposto)
        }
    }
}
const f1 = pproduto(1000, 0.10)
console.log(f1.get_salario_com_imposto())