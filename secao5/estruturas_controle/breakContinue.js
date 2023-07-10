const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`) 
}
console.log('---------------------------------------')
for (y in nums) {
    if (y == 5) {
      continue
    }
    console.log(`${y} = ${nums[y]}`)
}
console.log('---------------------------------------')

externo:
for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo // utilizando o break para um for externo através de rótulo
        console.log(`Par = ${a}, ${b}`)
    }
}
console.log('Fim!')

// Evitar de utilizar essa estrutura