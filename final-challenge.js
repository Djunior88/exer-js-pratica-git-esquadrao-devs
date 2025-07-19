// Desafio final - integrando todos os conceitos

// Dados de alunos
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];
// a)
function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

// b)
for (let aluno of students) {
    const media =
    calcularMedia(aluno.grades);
    aluno.media = media;
    aluno.status = media >= 70 ?
    "Aprovado" : "Reprovado";

    console.log(`${aluno.name} - Média: ${media.toFixed(2)} - ${aluno.status}`);
}

// c)
let aprovados = 0;
let reprovados = 0;

for (let aluno of students) {
    if (aluno.status === "Aprovado") {
        aprovados++;
    } else {
        reprovados++;
    }
}

console.log(`\nTotal de aprovados: ${aprovados}`);
console.log(`Total de reprovados: ${reprovados}`);

// d)
let melhorAluno = students[0];

for (let aluno of students) {
    if (aluno.media > melhorAluno.media) {
        melhorAluno = aluno;
    }
}

console.log(`\nMelhor aluno: ${melhorAluno.name} com média ${melhorAluno.media.toFixed(2)}`);

// e)
let somaDasMedias = 0

for (let aluno of students) {
    somaDasMedias += aluno.media;
}

const mediaGeral = somaDasMedias / students.length;

console.log(`\nMédia geral da turma: ${mediaGeral.toFixed(2)}`);