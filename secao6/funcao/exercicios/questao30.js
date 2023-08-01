maior_e_menor_valor = (array) => {
    let maior = array[0], menor = array[0]
    for (let i = 0; i < array.length; i++) {
        if (maior < array[i + 1]) {
            maior = array[i + 1]
        }
        if (menor > array[i + 1]) {
            menor = array[i + 1]
        }
    }
    console.log('O maior número é '.concat(maior),'. O menor número: '.concat(menor))
}
maior_e_menor_valor([5, 90, 30, 56, 114, 85, 4])