// Exercícios com loops

// Loop for básico
console.log("Contando de 1 a 5:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Loop for com break
console.log("\nLoop com break:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Encontrei o 6, parando o loop!");
        break;
    }
    console.log(i);
}

// Loop for com continue
console.log("\nPulando números pares:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // Pula o resto da iteração
    }
    console.log(i);
}

// Iterando sobre arrays
const fruits = ["Maçã", "Banana", "Laranja", "Manga", "Uva"];
console.log("\nLista de frutas:");
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruta ${i+1}: ${fruits[i]}`);
}

// Desafios

// a) Tabuada do 7
console.log("\nTabuada do 7:");
for (let i = 1; i <= 10; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

// b) Soma de números em um array
const numbers = [5, 8, 12, 4, 6];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("\nSoma dos números:", sum);

// c) Identificar o menor valor em um array
const values = [15, 8, 23, 4, 42, 1, 16];
let smallest = values[0]; // Assume primeiro elemento como o menor inicialmente
for (let i = 1; i < values.length; i++) {
    if (values[i] < smallest) {
        smallest = values[i];
    }
}
console.log("\nO menor valor no array é:", smallest);