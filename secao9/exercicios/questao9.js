function repeticao(repetira, repetidor) {
    let result = [];

    for (let i = 0; i <= repetidor; i++) {
        result.push(repetira)
    };

    return result;
};

console.log(repeticao(1, 6));