let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!isAtivo); // Transformando números em verdadeiro ou falso usa a exclamação(!) em JavaScript

console.log("Verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" ");
console.log(!!"texto");
console.log(!![]);
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("Falsos...");
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("Para finalizar...");
console.log(!!('' || null || 0 || ' ')); // O (||) é o nosso OU 

let nome = "Lucas";
console.log(nome || "Desconhecido");
 