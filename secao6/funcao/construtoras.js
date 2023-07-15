function Carro(velocidadeMaxima = 200, delta = 5) {
    // atricuto privado
    let velocidadeAtual = 0 // pertence apenas ao escopo da função
    // metrodo publico // Função responsável por acrescentar a velocidade atual
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico // Responsável por pegar a velocidade atual
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(3530, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())


// função privada: usar var ou let / pública: usar o this.