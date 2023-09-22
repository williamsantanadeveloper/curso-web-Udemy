Array.prototype.reduce2 = function (callback, valor_inicial) {

    const indice_inicial = valor_inicial ? 0 : 1;
    let acumulador = valor_inicial || this[0];
    for (let i = indice_inicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
};

const sum = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums.reduce2(sum, 21));