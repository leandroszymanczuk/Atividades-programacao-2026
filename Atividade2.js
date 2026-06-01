// ============================================================
//   ATIVIDADE 01.1 – Variáveis e Tipos Primitivos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================

// ------------------------------------------------------------
// EXERCÍCIO 1 – Apresentação criativa
// ------------------------------------------------------------
// Crie variáveis para nome, idade e hobby favorito.
// Monte uma frase usando template literal que se apresente e diga o que gosta de fazer.

// → Seu código aqui:


let nome = "Leandro"
let idade = 26 
const hobby = "treinar, fazer trilhas, estudar "
console.log(`ola meu nome ${nome}, tenho ${idade} anos, gosto de ${hobby}.`)
// ------------------------------------------------------------
// EXERCÍCIO 2 – Frase sobre clima
// ------------------------------------------------------------
// Crie variáveis para cidade e temperatura atual (número).
// Use template literal para criar uma frase como:
// "Hoje em <cidade> está fazendo <temperatura>°C, perfeito para ..."

// → Seu código aqui:


let cidade = "Schroeder"
let temperatura = " 42°C"
console.log(`Hoje em ${cidade} esta fazendo ${temperatura} perfeito para tomar banho de piscina.`)

// ------------------------------------------------------------
// EXERCÍCIO 3 – Tipos primitivos em frases
// ------------------------------------------------------------
// Crie uma variável de cada tipo primitivo: string, number, boolean, undefined, null.
// Para cada uma, exiba uma frase usando template literal que diga o valor e o tipo.

// → Seu código aqui:


let string ="Lógica de programação"
let number = 5 
let bolean = false
let undefined 
let erro = null
console.log(string)
console.log(number)
console.log(bolean)
console.log(undefined) 
console.log(erro)
console.log(typeof string)
console.log(typeof number)
console.log(typeof bolean)
console.log(typeof undefined)
console.log(typeof erro)

// ------------------------------------------------------------
// EXERCÍCIO 4 – Mini história
// ------------------------------------------------------------
// Crie variáveis para personagem, idade, cidade e missão.
// Monte uma frase usando template literal contando uma mini história com esses dados.

// → Seu código aqui:
 
let personagem = "Homem de ferro"
let idadePersonagem = 55
let cidadePersonagem = "Schroeder"
let missão = "saltar"
console.log(`O ${personagem} tem ${idadePersonagem} anos e mora em ${cidadePersonagem}, ele gosta de ${missão} dos prédios.`)
// ------------------------------------------------------------
// EXERCÍCIO 5 – Mensagem motivacional
// ------------------------------------------------------------
// Crie uma variável com seu nome e outra com um objetivo para este ano.
// Use template literal para criar uma mensagem motivacional personalizada.

// → Seu código aqui:

let meuNome = "Leandro szymanczuk"
let objetivo = "Focar mais nos estudos e trabalho"
console.log(`Sou o ${meuNome} esse ano vou ${objetivo}.`)

// ------------------------------------------------------------
// EXERCÍCIO 6 – Menu
// ------------------------------------------------------------
// Utilizando apenas console.log(), reproduza o menu que esta na imagem "exemplo-menu-atividade-01-2" anexa junto a esta atividade

// → Seu código aqui:


console.log(`
====================================
         SISTEMA DE USUARIO  
==================================== 
1 - Ver Perfil
2 - Editar Perfil 
3 - Configurações
4 - Notificações 
5 - Relatorios 
6 - Ajuda
7 - Sobre o Sistema
0 - Sair 
====================================
Digite o numero da opção desejada 
====================================`)