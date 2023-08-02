baskara = (a, b, c) => {
    let delta = (Math.pow(-b, 2)) - 4 * a * c
    if (delta >= 0) {
        let x1 = (-(b) + (Math.sqrt(delta))) / (2 * a)
        let x2 = (-(b) - (Math.sqrt(delta))) / (2 * a)
        return resultado = [x1, x2]
    }
    else {
        return resultado = 'Delta negativo'
    }
}
console.log(baskara(1, 5, 4))