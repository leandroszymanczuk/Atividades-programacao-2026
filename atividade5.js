// ============================================================
//   ATIVIDADE 05 – Operadores Relacionais em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Para executar:
//     node atividade-05.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados
//       não serão solicitados novamente.
// =============================================================
const prompt = require('prompt-sync')();

// ------------------------------------------------------------
// EXERCÍCIO 1 – Comparando com == e ===
// ------------------------------------------------------------
// Para cada par de valores abaixo, declare duas variáveis e exiba:
//   a) O resultado de == usando template literal: "<a> == <b> → <resultado>"
//   b) O resultado de === usando template literal: "<a> === <b> → <resultado>"
//
// Pares de valores:
//   1) 10 e 10
//   2) 10 e "10"
//   3) 0 e false
//   4) null e undefined
//   5) "JS" e "JS"

// → Seu código aqui:

//let a1 = 10;
//let b1 = 10;
//console.log(`${a1} == ${b1} → ${a1 == b1}`);
//console.log(`${a1} === ${b1} → ${a1 === b1}`);


//let a2 = 10;
//let b2 = "10";
//console.log(`${a2} == ${b2} → ${a2 == b2}`);
//console.log(`${a2} === ${b2} → ${a2 === b2}`);


//let a3 = 0;
//let b3 = false;
//console.log(`${a3} == ${b3} → ${a3 == b3}`);
//console.log(`${a3} === ${b3} → ${a3 === b3}`);


//let a4 = null;
//let b4 = undefined;
//console.log(`${a4} == ${b4} → ${a4 == b4}`);
//console.log(`${a4} === ${b4} → ${a4 === b4}`);


//let a5 = "JS";
//let b5 = "JS";
//console.log(`${a5} == ${b5} → ${a5 == b5}`);
//onsole.log(`${a5} === ${b5} → ${a5 === b5}`);

// ------------------------------------------------------------
// EXERCÍCIO 2 – Comparando com != e !==
// ------------------------------------------------------------
// Para cada par de valores abaixo, exiba:
//   a) O resultado de != : "<a> != <b> → <resultado>"
//   b) O resultado de !== : "<a> !== <b> → <resultado>"
//
// Pares de valores:
//   1) 5 e 5
//   2) 5 e "5"
//   3) 7 e 3
//   4) true e 1

// → Seu código aqui:
let a1 = 5;
let b1 = 5;
console.log(`${a1} != ${b1} → ${a1 != b1}`);
console.log(`${a1} !== ${b1} → ${a1 !== b1}`);

let a2 = 5;
let b2 = "5";
console.log(`${a2} != ${b2} → ${a2 != b2}`);
console.log(`${a2} !== ${b2} → ${a2 !== b2}`);

let a3 = 7;
let b3 = 3;
console.log(`${a3} != ${b3} → ${a3 != b3}`);
console.log(`${a3} !== ${b3} → ${a3 !== b3}`);

let a4 = true;
let b4 = 1;
console.log(`${a4} != ${b4} → ${a4 != b4}`);
console.log(`${a4} !== ${b4} → ${a4 !== b4}`);

// ------------------------------------------------------------
// EXERCÍCIO 3 – Maior, menor e igual
// ------------------------------------------------------------
// a) Declare "salarioA" com valor 3500 e "salarioB" com valor 4200.
// b) Calcule e armazene em variáveis (booleanas) os resultados de:
//    - salarioA > salarioB
//    - salarioA < salarioB
//    - salarioA >= salarioB
//    - salarioA <= salarioB
//    - salarioA === salarioB
// c) Exiba cada resultado com template literal e verificação ternária no formato:
//    "Salário A (R$ <a>) > Salário B (R$ <b>): <resultado>"

// → Seu código aqui:
//let salarioA = 3500;
//let salarioB =4200;

//let maior = salarioA > salarioB;
//let menor = salarioA < salarioB;
//let maiorOuIgual = salarioA >= salarioB;
//let menorOuIgual = salarioA <= salarioB;
//let igual = salarioA === salarioB;

//console.log(`Salário A (R$ ${salarioA}) > Salário B (R$ ${salarioB}): ${maior ? "Sim" : "Não"}`);
//console.log(`Salário A (R$ ${salarioA}) < Salário B (R$ ${salarioB}): ${menor ? "Sim" : "Não"}`);
//console.log(`Salário A (R$ ${salarioA}) >= Salário B (R$ ${salarioB}): ${maiorOuIgual ? "Sim" : "Não"}`);
//console.log(`Salário A (R$ ${salarioA}) <= Salário B (R$ ${salarioB}): ${menorOuIgual ? "Sim" : "Não"}`);
//console.log(`Salário A (R$ ${salarioA}) === Salário B (R$ ${salarioB}): ${igual ? "Sim" : "Não"}`);
//console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 4 – Armazenando resultados em variáveis
// ------------------------------------------------------------
// a) Declare "estoque" com valor 0.
// b) Armazene em "temEstoque" o resultado de: estoque > 0
// c) Armazene em "estoqueZerado" o resultado de: estoque === 0
// d) Declare "temperatura" com valor 36.5.
// e) Armazene em "febre" o resultado de: temperatura >= 37.6
// f) Exiba cada variável usando template literal.

// → Seu código aqui:

//let estoque = 0;
//let temEstoque = estoque > 0;
//let estoqueZerado = estoque === 0;
//let temperatura = 36.5;
//let febre = temperatura >= 37.5;

//console.log(`Estoque: ${estoque} Tem estoque? ${temEstoque ? 'sim' : 'não'}`);
//console.log(`Estoque: ${estoque} Estoque zerado? ${estoqueZerado ? 'sim' : 'não'}`);
//console.log(`Temperatura: ${temperatura} Febre? ${febre ? 'sim' : 'não'}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 5 – Comparações com input do usuário
// ------------------------------------------------------------
// a) Peça ao usuário dois números.
// b) Armazene em variáveis o resultado das seguintes comparações:
//    - num1 > num2
//    - num1 < num2
//    - num1 === num2
//    - num1 >= num2
// c) Exiba cada resultado com template literal.

// → Seu código aqui:

//let num1 = Number(prompt("Digite o primeiro número:"));
//let num2 = Number(prompt("Digite o segundo número:"));

//let maior = num1 > num2;
//let menor = num1 < num2;
//let igual = num1 === num2;
//let maiorOuIgual = num1 >= num2;

//console.log(`Número 1 (${num1}) > Número 2 (${num2}): ${maior ? "Sim" : "Não"}`);
//console.log(`Número 1 (${num1}) < Número 2 (${num2}): ${menor ? "Sim" : "Não"}`);
//console.log(`Número 1 (${num1}) === Número 2 (${num2}): ${igual ? "Sim" : "Não"}`);
//console.log(`Número 1 (${num1}) >= Número 2 (${num2}): ${maiorOuIgual ? "Sim" : "Não"}`);       

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 6 – Verificação de preço
// ------------------------------------------------------------
// a) Peça ao usuário o preço de um produto.
// b) Defina uma constante "precoMaximo" com valor 100.
// c) Armazene em "estaDentroDoOrcamento" o resultado de: preco <= precoMaximo.
// d) Armazene em "esteItemEhCaro" o resultado de: preco > precoMaximo.
// e) Exiba no console:
//    "Preço informado: R$ <preco>"
//    "Dentro do orçamento (≤ R$ <precoMaximo>)? : <estaDentroDoOrcamento ? "Sim" : "Não">"
//    "Item caro (> R$ <precoMaximo>)? : <esteItemEhCaro ? "Sim" : "Não">"

// → Seu código aqui:


let preco = Number(prompt("Digite o preço do produto: "));


const precoMaximo = 100;


let estaDentroDoOrcamento = preco <= precoMaximo;
let esteItemEhCaro = preco > precoMaximo;

// e) Exibição
console.log(`Preço informado: R$ ${preco}`);
console.log(`Dentro do orçamento (≤ R$ ${precoMaximo})? : ${estaDentroDoOrcamento ? "Sim" : "Não"}`);
console.log(`Item caro (> R$ ${precoMaximo})? : ${esteItemEhCaro ? "Sim" : "Não"}`);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 7 – Comparando notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome e a idade de 2 pessoas e armazene como objetos dentro de uma lista "cadastro".
// b) Armazene os resultados das comparações:
//    - idadePessoa1 > idadePessoa2
//    - idadePessoa1 === idadePessoa2
//    - idadePessoa1 >= 18 (maior de idade)
//    - idadePessoa2 >= 18 (maior de idade)
// c) Exiba todos os resultados com template literal e verificação ternária.
//    Exemplo: `Idade da <nomePessoa1> é <idadePessoa1> e ela é ${idadePessoa1 >= 18 ? "maior de idade" : "menor de idade"}.`
// d) Similar ao exemplo acima, verifique e exiba qual pessoa é mais velha.

// → Seu código aqui:
// Importa o prompt-sync





console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 8 – Comparando notas (versão avançada)
// ------------------------------------------------------------
// a) Peça ao usuário o nome e três notas de 2 alunos e armazene como objetos dentro de uma lista "alunos".
// b) Calcule a média de cada aluno e armazene em "mediaAluno1" e "mediaAluno2".
// e) Verifique e exiba no console qual aluno obteve a maior média usando template literal e comparador ternário
// c) Compare e exiba no console, qual aluno obteve a primeira maior nota, a segunda e a terceira.
//    Exemplo: `Aluno com primeira maior nota: ${nota1aluno1 > nota1aluno2 ? nomeAluno1 : nomeAluno2}`
// → Seu código aqui:


console.log("_______________________________");