const salario_funcionario = (horas_trabalhadas, recebimento_pro_hora) => {
    return `O salário é de R$${horas_trabalhadas * recebimento_pro_hora}`
};

console.log(salario_funcionario(150, 40.5));