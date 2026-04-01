// ============================================================
//   DESAFIO QUIZ – Estruturas de Controle (Switch / Case)
// ============================================================
// Regras: sem loops e sem funções.
// Use apenas switch/case e/ou if/else e operadores.
// ============================================================
//
// Crie um quiz de 5 perguntas sobre alguma tema de sua escolha (tecnologia, filmes, curiosidades, jogos, etc).
// Cada pergunta deve possuir 4 alternativas (1 a 4); apenas uma deve ser considerada correta.
//
// Fluxo geral:
//   a) Pergunte o nome do jogador e armazene em um objeto "jogador".
//   b) Exiba uma mensagem de boas-vindas com o nome, explicando sobre o que se trata o quiz.
//   c) Adicione "pontos" ao objeto, iniciando em 0.
//
// Para cada uma das 5 perguntas, repita este padrão:
//   1. Exiba o enunciado e as 4 alternativas com console.log().
//   2. Leia a resposta do jogador (questionInt()).
//   3. Use switch/case para avaliar a resposta:
//      - No case correto: exiba "Correto!" e some 1 ponto a "pontos".
//      - Nos demais cases: exiba "Errado! A resposta certa era a opção X."
//      - No default: exiba "Opção inválida, nenhum ponto atribuído."
//
// Ao final:
//   d) Exiba o total: "Você fez X de 5 pontos."
//   e) Use switch/case (ou if/else) para exibir um resultado final com frases como as abaixo
//      Dica: você pode modificar o retorno para se adequar ao tema escolhido
//      - 5 pontos        → "Perfeito! Você é um expert!"
//      - 4 pontos        → "Muito bem! Quase lá!"
//      - 3 pontos        → "Bom trabalho, mas pode melhorar."
//      - 1 ou 2 pontos   → "Nheee!"
//      - 0 pontos        → "VIX, tente novamente!"
//   f) Exiba o objeto "resultado" com console.table():
//      { jogador, pontos, total: 5, aprovado: pontos >= 3 }
//
// Desafio extra:
//  Ao final, exiba para cada pergunta do quiz:
//    Pergunta: Qx.
//    Resposta do jogador para pergunta X: <respostaJogadorQx>
//    Resposta correta da pergunta X: <respostaCorretaQx>
//
// ============================================================

const lerTeclado = require("readline-sync");

// → Seu código aqui:

const jogador = {
  nome: lerTeclado.question("Qual é o seu nome?"),
  pontos: 0
};

console.log(`Bem-vindo ao quiz, ${jogador.nome}! Prepare-se para testar seus conhecimentos!`);
console.log("");


console.log("Pergunta 1: Quem descobriu o brasil");
console.log("1) charles xaplim");
console.log("2) Leopoldo margel");
console.log("3) Pedro alvares cabral");
console.log("4) Luciano hulk");
const resposta1 = lerTeclado.questionInt("Digite o número da sua resposta:");
switch (resposta1) {
  case 3:
    console.log("Correto!");
    jogador.pontos += 1;
    break;
  case 1:
  case 2:
  case 4:
    console.log("Errado! A resposta certa era a opção 3.");
    break;
  default:
    console.log("Opção inválida, nenhum ponto atribuído.");
}
console.log("");


console.log("Pergunta 2: Qual ano foi descoberto o brasil");
console.log("1) 1450");
console.log("2) 1500");
console.log("3) 1000");
console.log("4) 1999");
const resposta2 = lerTeclado.questionInt("Digite o número da sua resposta:");
switch (resposta2) {
  case 2:
    console.log("Correto!");
    jogador.pontos += 1;
    break;
  case 1:
  case 3:
  case 4:
    console.log("Errado! A resposta certa era a opção 2.");
    break;
  default:
    console.log("Opção inválida, nenhum ponto atribuído.");
}
console.log("");


console.log("Pergunta 3: Quem foi o primeiro campeao da copa ?");
console.log("1) Alemanha");
console.log("2) Argentina");
console.log("3) Uruguai");
console.log("4) Brasil");
const resposta3 = lerTeclado.questionInt("Digite o número da sua resposta:");
switch (resposta3) {
  case 3:
    console.log("Correto!");
    jogador.pontos += 1;
    break;
  case 1:
  case 2:
  case 4:
    console.log("Errado! A resposta certa era a opção 3.");
    break;
  default:
    console.log("Opção inválida, nenhum ponto atribuído.");
}
console.log("");

console.log("Pergunta 4: Qual o dia nascional da mentira?");
console.log("1) 9 de dezembro");
console.log("2) 1 abril");
console.log("3) 18 marco");
console.log("4) 2 de julho");
const resposta4 = lerTeclado.questionInt("Digite o número da sua resposta:");
switch (resposta4) {
  case 2:
    console.log("Correto!");
    jogador.pontos += 1;
    break;
  case 1:
  case 3:
  case 4:
    console.log("Errado! A resposta certa era a opção 2.");
    break;
  default:
    console.log("Opção inválida, nenhum ponto atribuído.");
}
console.log("");


console.log("Pergunta 5: Qaul é o quinto dia da semana?");
console.log("1) Quinta feira");
console.log("2) Sabado ");
console.log("3) Segunda feira ");
console.log("4) Quarta feira ");
const resposta5 = lerTeclado.questionInt("Digite o número da sua resposta:");
switch (resposta5) {
  case 1:
    console.log("Correto!");
    jogador.pontos += 1;
    break;
  case 2:
  case 3:
  case 4:
    console.log("Errado! A resposta certa era a opção 1.");
    break;
  default:
    console.log("Opção inválida, nenhum ponto atribuído.");
}
console.log("");


console.log(`Você fez ${jogador.pontos} de 5 pontos.`);

switch (jogador.pontos) {
  case 5:
    console.log("Perfeito! Você é um expert!");
    break;
  case 4:
    console.log("Muito bem! Quase lá!");
    break;
  case 3:
    console.log("Bom trabalho, mas pode melhorar.");
    break;
  case 1:
  case 2:
    console.log("Nheee!");
    break;
  case 0:
    console.log("VIX, tente novamente!");
    break;
}

console.table({
  jogador: jogador.nome,
  pontos: jogador.pontos,
  total: 5,
  aprovado: jogador.pontos >= 3
});


console.log("");
console.log("===== RESUMO DAS RESPOSTAS =====");

console.log("Pergunta 1:");
console.log("Sua resposta:", resposta1);
console.log("Resposta correta: 3");

console.log("Pergunta 2:");
console.log("Sua resposta:", resposta2);
console.log("Resposta correta: 2");

console.log("Pergunta 3:");
console.log("Sua resposta:", resposta3);
console.log("Resposta correta: 3");

console.log("Pergunta 4:");
console.log("Sua resposta:", resposta4);
console.log("Resposta correta: 2");

console.log("Pergunta 5:");
console.log("Sua resposta:", resposta5);
console.log("Resposta correta: 1");