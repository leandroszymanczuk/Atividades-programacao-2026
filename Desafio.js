// ============================================================
//   DESAFIOS (para quem já terminou a atividade 09) – For
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

let lerTeclado = require("readline-sync")

// ------------------------------------------------------------
// DESAFIO 1 – Progressão de saldo bancário
// ------------------------------------------------------------
// Um investimento rende juros compostos mensais.
//
    // a) Pergunte ao usuário:
    //    - Saldo inicial (questionFloat())
//    - Taxa de juros mensal em % (questionFloat()) — ex: 1.5
//    - Número de meses
// b) Usando um for, calcule e exiba mês a mês:
//    "Mês 1:  R$ <saldo>"
//    "Mês 2:  R$ <saldo>"
//    ...
//    A fórmula de juros compostos é:
//    saldo = saldo * (1 + taxa / 100)
// c) Ao final, exiba o saldo total e o lucro obtido (saldo final - saldo inicial).
// d) Armazene cada mês como objeto { mes, saldo } em um array e exiba com console.table().

// → Seu código aqui:


// let saldoInicial = lerTeclado.questionFloat("Saldo inicial: ");
// let taxa = lerTeclado.questionFloat("Taxa de juros mensal (%): ");
// let meses = lerTeclado.questionInt("Número de meses: ");

// let saldo = saldoInicial;
// let historico = [];

// for (let i = 1; i <= meses; i++) {
//     saldo = saldo * (1 + taxa / 100);

//     console.log(`Mês ${i}: R$ ${saldo.toFixed(2)}`);

//     historico.push({
//         mes: i,
//         saldo: Number(saldo.toFixed(2))
//     });
// }

// let lucro = saldo - saldoInicial;

// console.log("\nResumo:");
// console.log(`Saldo final: R$ ${saldo.toFixed(2)}`);
// console.log(`Lucro obtido: R$ ${lucro.toFixed(2)}`);

// console.table(historico);
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Cadastro e relatório de alunos
// ------------------------------------------------------------
// a) Pergunte ao usuário quantos alunos serão cadastrados.
// b) Usando um for, colete de cada aluno:
//    - Nome (question())
//    - Nota 1, Nota 2 e Nota 3 (questionFloat() para cada)
// c) Calcule a média de cada aluno e armazene como objeto:
//    { nome, notas, media, situacao }
//    A situação deve ser:
//      "Aprovado"    → média >= 7
//      "Recuperação" → média >= 5 e < 7
//      "Reprovado"   → média < 5
// d) Após coletar todos, percorra o array e exiba o relatório:
//    "<nome> | Média: <media> | <situacao>"
// e) Exiba:
//    - Média geral da turma
//    - Nome do aluno com maior média
//    - Nome do aluno com menor média
//    - Quantidade de aprovados, em recuperação e reprovados
// f) Exiba o array com console.table().

// → Seu código aqui:

let quantidade = lerTeclado.question("Quantos alunos serão cadastrados? "));

let alunos = [];

let somaMedias = 0;

let maiorMedia = -Infinity;
let menorMedia = Infinity;
let nomeMaior = "";
let nomeMenor = "";

let aprovados = 0;
let recuperacao = 0;
let reprovados = 0;

for (let i = 1; i <= quantidade; i++) {
    console.log(`\nAluno ${i}:`);

    let nome = readline.question("Nome: ");
    let n1 = lerTeclado.question("Nota 1: "));
    let n2 = lerTeclado.question("Nota 2: "));
    let n3 = lerTeclado.question("Nota 3: "));

    let media = (n1 + n2 + n3) / 3;

    let situacao;

    if (media >= 7) {
        situacao = "Aprovado";
        aprovados++;
    } else if (media >= 5) {
        situacao = "Recuperação";
        recuperacao++;
    } else {
        situacao = "Reprovado";
        reprovados++;
    }

    somaMedias += media;

    if (media > maiorMedia) {
        maiorMedia = media;
        nomeMaior = nome;
    }

    if (media < menorMedia) {
        menorMedia = media;
        nomeMenor = nome;
    }

    alunos.push({
        nome: nome,
        notas: [n1, n2, n3],
        media: Number(media.toFixed(2)),
        situacao: situacao
    });
}


console.log("\nRelatório:");
for (let aluno of alunos) {
    console.log(`${aluno.nome} | Média: ${aluno.media.toFixed(2)} | ${aluno.situacao}`);
}


let mediaGeral = somaMedias / quantidade;

console.log("\nResumo da turma:");
console.log(`Média geral: ${mediaGeral.toFixed(2)}`);
console.log(`Maior média: ${nomeMaior} (${maiorMedia.toFixed(2)})`);
console.log(`Menor média: ${nomeMenor} (${menorMedia.toFixed(2)})`);
console.log(`Aprovados: ${aprovados}`);
console.log(`Recuperação: ${recuperacao}`);
console.log(`Reprovados: ${reprovados}`);


console.table(alunos);
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de adivinhar o número
// ------------------------------------------------------------
// O programa sorteia um número de 1 a 100 e o usuário tem no máximo 7 tentativas para adivinhar.
//
// a) Gere um número aleatório
//    Para gerar um número aleatório, utilize a função Math.random()
// b) Usando um for:
//    - Peça ao usuário um palpite.
//    - Se errar: exiba "Muito alto!" ou "Muito baixo!" conforme o caso.
//    - Informe quantas tentativas restam: "Tentativas restantes: <restantes>"
//    - Se acertar: exiba "Parabéns! Acertou em <i> tentativa(s)!"
// c) Se o usuário esgotar as tentativas sem acertar, exiba:
//    "Game over! O número era <secreto>."
// d) Ao final, exiba um resumo:
//    - Número secreto
//    - Número de tentativas usadas
//    - Resultado: "Vitória" ou "Derrota"

// → Seu código aqui:


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Análise de vendas mensais
// ------------------------------------------------------------
// a) Declare o array de vendas mensais (Jan a Dez):
//    const vendas = [12500, 9800, 15200, 11000, 13750, 8900,
//                    17300, 14600, 10200, 16800, 19500, 22000];
// b) Usando fors, calcule e exiba:
//    - Total de vendas no ano
//    - Média mensal
//    - Mês com maior venda (nome do mês e valor)
//    - Mês com menor venda (nome do mês e valor)
//    - Quantos meses ficaram acima da média
//    - Quantos meses ficaram abaixo da média
// c) Exiba um relatório mês a mês indicando se ficou acima ou abaixo da média:
//    "Janeiro:   R$ 12.500,00 – Abaixo da média"
//    "Fevereiro: R$  9.800,00 – Abaixo da média"
//    ...
//    Dica: use um array com os nomes dos meses para exibir o nome correto.
// d) Exiba o array de objetos { mes, venda, situacao } com console.table().

// → Seu código aqui:


console.log("_______________________________");