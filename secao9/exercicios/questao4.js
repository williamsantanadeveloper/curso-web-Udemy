const nome_do_mes = (numero) => {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[numero - 1]
};

console.log(nome_do_mes(1));
console.log(nome_do_mes(4));