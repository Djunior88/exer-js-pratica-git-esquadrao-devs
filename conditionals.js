// conditionals.js
// Exercícios com estruturas condicionais

// Verificação de idade
const age = 17;

if (age >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade!");
}

// Verificação com múltiplas condições
const hour = 14;

if (hour < 12) {
    console.log("Bom dia!");
} else if (hour < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

// Operadores lógicos
const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("Não precisa trabalhar hoje!");
} else {
    console.log("Dia de trabalho!");
}

// Operador ternário
const status = age >= 18 ? "Adulto" : "Menor";
console.log("Status:", status);

// ----------------------
// Desafios:

// a) Classificação de notas
const nota = 85;
let conceito;

if (nota >= 90 && nota <= 100) {
    conceito = "A";
} else if (nota >= 80 && nota < 90) {
    conceito = "B";
} else if (nota >= 70 && nota < 80) {
    conceito = "C";
} else if (nota >= 60 && nota < 70) {
    conceito = "D";
} else {
    conceito = "F";
}

console.log("Nota:", nota, "- Conceito:", conceito);

// b) Verificar se número é par ou ímpar
const numero = 7;

if (numero % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

// c) Pode dirigir?
const temHabilitacao = true;

if (age >= 18 && temHabilitacao === true) {
    console.log("Pode dirigir!");
} else {
    console.log("Não pode dirigir.");
}