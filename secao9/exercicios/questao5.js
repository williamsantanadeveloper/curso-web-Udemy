const maior_ou_igual = (n1, n2) => {
    if (n1 == n2) {
        return true
    }

    else if (n1 > n2 || n2 > n1) {
        return false
    }
    else if (n1 || n2 === " ") {
        return false
    }
};

console.log(maior_ou_igual(0, 0));
console.log(maior_ou_igual(0, "0"));
console.log(maior_ou_igual(5, 1));

