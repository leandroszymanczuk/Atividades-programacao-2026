// ============================================================
//   ATIVIDADE 13 – Estruturas de Dados: Matriz
// ============================================================

let lerTeclado = require("readline-sync")

// ------------------------------------------------------------
// EXERCÍCIO 1 – Lendo uma matriz
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [10, 20, 30],
//      [40, 50, 60],
//      [70, 80, 90],
//    ];
// b) Exiba: número de linhas e número de colunas.
// c) Exiba o elemento central (m[1][1]).
// d) Exiba o canto inferior direito (use .length).

// → Seu código aqui:

// console.log(`Linhas: ${m.length}, Colunas: ${m[0].length}`)
// console.log(m[1][1])
// console.log(m[2][2])

// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 2 – Percorrendo com for aninhado
// ------------------------------------------------------------
// a) Declare a matriz:
//    const m = [
//      [1, 2, 3, 4],
//      [5, 6, 7, 8],
//      [9, 10, 11, 12],
//    ];
//    let soma = null
// b) Usando dois for aninhados, exiba cada elemento no formato:
//    "m[i][j] = <valor>"
// c) Calcule e exiba a SOMA de todos os elementos da matriz.

// → Seu código aqui:
// for(let i = 0; i < m.length ; i++) {
//     for(let j = 0; j < m[i].length; j++) {
//         soma += m[i][j]
//     }
// }
// console.log(soma)


// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior e menor valor
// ------------------------------------------------------------
// a) Utilizando a matriz:
//    const m = [
//      [12,  7, 25],
//      [ 3, 18,  9],
//      [31, 14, 22],
//    ];
//    let maior = m[0][0]
//    let menor = m[0][0]
//    let maiorMatriz = null
//    let menorMatriz = null
// b) Usando for aninhado, encontre o MAIOR e o MENOR valor da matriz.
// c) Exiba também a posição (linha, coluna) onde cada um está.

// → Seu código aqui:

// for(let i = 0; i < m.length ; i++) {
//     for(let j = 0; j < m[i].length; j++) {
//         if(maior < m[i][j]) {
//             maior = m[i][j]
//             maiorMatriz = [i, j]
//         } else if(menor > m[i][j]) {
//             menor = m[i][j]
//             menorMatriz = [i, j]
//         }
//     }
// }
// console.log(`Maior: ${maior}, Linha : ${maiorMatriz[0] + 1}, Coluna: ${maiorMatriz[1] + 1}`)
// console.log(`Menor: ${menor}, Linha : ${menorMatriz[0] + 1}, Coluna: ${menorMatriz[1] + 1}`)


// console.log("_______________________________");
// const m = [
//     [12,  7, 25],
//     [ 3, 18,  9],
//     [31, 14, 22],
//   ];

// let somaLinha = null
// let somaColuna = null
// let somaDiagonal = null
// let colunas = 3
// ------------------------------------------------------------
// EXERCÍCIO 4 – Soma das linhas e das colunas
// ------------------------------------------------------------
// a) Use a mesma matriz do Exercício 3.
// b) Exiba a soma de cada LINHA: "Linha <i>: <soma>"
// c) Exiba a soma de cada COLUNA: "Coluna <j>: <soma>"
// d) Exiba a soma da DIAGONAL principal (m[i][i]).

// → Seu código aqui:
// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// for (let i = 0; i < matriz.length; i++) {
//     let somaLinha = 0;

//     for (let j = 0; j < matriz[i].length; j++) {
//         somaLinha += matriz[i][j];
//     }

//     console.log(`Linha ${i}: ${somaLinha}`);
// }

// for (let j = 0; j < matriz[0].length; j++) {
//     let somaColuna = 0;

//     for (let i = 0; i < matriz.length; i++) {
//         somaColuna += matriz[i][j];
//     }

//     console.log(`Coluna ${j}: ${somaColuna}`);
// }

// let somaDiagonal = 0;

// for (let i = 0; i < matriz.length; i++) {
//     somaDiagonal += matriz[i][i];
// }

// console.log(`Diagonal principal: ${somaDiagonal}`);



// console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente
// ------------------------------------------------------------
// a) Pergunte ao usuário quantas linhas e quantas colunas terá a matriz.
// b) Usando dois for aninhados, peça cada valor:
//    "Digite m[<i>][<j>]: "
// c) Exiba a matriz final com console.table().

// → Seu código aqui:


// EXERCÍCIO 5 – Preenchendo uma matriz dinamicamente

let linhas = lerTeclado.questionInt("Quantas linhas terá a matriz? ");
let colunas = lerTeclado.questionInt("Quantas colunas terá a matriz? ");
let matriz = [];

for (let i = 0; i < linhas; i++) {
    matriz[i] = [];

    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = lerTeclado.questionInt(`Digite m[${i}][${j}]: `);
    }
}

console.table(matriz);

console.log("_______________________________");