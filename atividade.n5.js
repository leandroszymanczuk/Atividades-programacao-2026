//  • Nome do(s) aluno(s): Kaio, Andre e Gustavo
//
// ============================================================

let lerTeclado = require('readline-sync');


// ------------------------------------------------------------
// QUESTÃO ÚNICA (peso: 10) – Formulário Condicionado: Agência de Viagens
// ------------------------------------------------------------
//
// Você vai criar o sistema de recomendação de destinos de uma agência de viagens.
// O formulário faz perguntas ao usuário e, dependendo de cada resposta,
// o caminho seguido é diferente — até chegar a um dos destinos finais (A a I).
//
// REGRAS:
//   • Use if/else e/ou switch/case para toda a lógica de ramificação.
//   • Mostre as opções de cada pergunta com console.log() antes de coletar a resposta.
//   • Use questionInt() para perguntas de múltipla escolha numerada.
//   • Use question() para entradas de texto.
//   • Sempre que uma opção inválida for escolhida, exiba: "Opção inválida. Encerrando o formulário."
//     e não continue com as próximas perguntas.

//   → Seu código aqui:

let viajante = {
    nomeViajante: lerTeclado.question('Qual seu nome: '),
    idadeViajante: lerTeclado.questionInt('Qual sua idade: '),
    orcamento: lerTeclado.question('Qual o seu orcamento: Economico, Moderado, Luxo: ')
}

switch(viajante.orcamento){
    case 1:
        console.log('Economico')
        break;
    case 2:
        console.log('Moderado')
        break;
    case 3:
        console.log('Luxo')
        break;
    default:
        console.log('Opcao invalida. Encerrando o formulario')
}

console.log(`Ola, ${viajante.nomeViajante}! Vamos encontrar o destino perfeito para voce`)

console.log('Qual tipo de clima voce prefere?')
console.log('1) Tropical/Quente')
console.log('2) Frio/Neve')
console.log('3) Temperado/Ameno')

let resposta1 = lerTeclado.questionInt('Qual opcao deseja: ')

let resposta2;

switch(resposta1){
    case 1:
         resposta2 = lerTeclado.questionInt('Voce prefere: 1) Praia/mar, 2) Floresta/Ecoturismo: ')
        console.log(resposta2)
        break;
    case 2:
         resposta2 = lerTeclado.questionInt('Voce prefere: 1) Neve de verdade, 2) Frio sem neve: ')
        console.log(resposta2)
        break;
    case 3:
         resposta2 = lerTeclado.questionInt('Voce prefere explorar: 1) Cultura, Museus e arquitetura historica, 2) Natureza, Trilhas e parques nacionais: ')
        console.log(resposta2)
        break;
    default:
        console.log('Opcao invalida. Encerrando o formulario')
}

let resposta3;

switch(resposta1 || resposta2){
    case 1:
        console.log('Como voce prefere sua viagem:'),
        console.log('1) Animada - praias badaladas e muito agito')
        console.log('2) Tranquila - sossego e natureza preservada')
        resposta3 = lerTeclado.questionInt('Escolha uma opcao: ')
        console.log(resposta3)
        break;
    case 2:
        console.log('Qual e o seu objetivo: '),
        console.log('1) Praticar esportes de inverno (esqui, snowboard)')
        console.log('2) Contemplar a paisagem nevada e relaxar')
        resposta3 = lerTeclado.questionInt('Escolha uma opcao: ')
        console.log(resposta3)
        break;
    case 3:
        console.log('Qual regiao voce prefere:')
        console.log('1) Europa')
        console.log('2) America do Sul')
        resposta3 = lerTeclado.questionInt('Escolha uma opcao: ')
        console.log(resposta3)
        break;
    default:
        console.log('Opcao invalida. Encerrando o formulario')
}

let destino;

if(resposta1 == '1' && resposta2 == '1' && resposta3 == '1'){
    destino = 'A) Cancun (Mexico) ou Fortaleza (Brasil)'
} else if(resposta1 == '1' && resposta2 == '1' && resposta3 == '2'){
    destino = 'B) Maldivas ou Fernando de Noronha (Brasil)'
} else if(resposta1 == '1' && resposta2 == '2'){
    destino = 'C) Amazonia (Brasil) ou Costa Rica'
} else if(resposta1 == '2' && resposta2 == '1' && resposta3 == '1'){
    destino = 'D) Aspen (EUA) ou Bariloche (Argentina)'
} else if(resposta1 == '2' && resposta2 == '1' && resposta3 == '2'){
    destino = 'E) Ushuaia (Argentina) ou Laponia (Finlandia)'     
} else if(resposta1 == '2' && resposta2 == '2'){
    destino = 'F) Serra Gaucha (Brasil) ou Patogonia Chilena'
} else if(resposta1 == '3' && resposta2 == '1' && resposta3 == '1'){
    destino = 'G) Lisboa, Barcelona ou Roma'
} else if(resposta1 == '3' && resposta2 == '1' && resposta3 == '2'){
    destino = 'H) Buenos Aires, Cusco ou Cartagena'
} else if( resposta1 == '3' && resposta2 == '2'){
    destino = 'Chapada dos Veadeiros ou Torres del Paine'
} else {
    console.log('Opcao invalida. Encerrando o formulario')
}

console.log(`Destino recomendado para ${viajante.nomeViajante} e destino: ${destino}`)

console.log(`
   ===============================================
   |   RECOMENDAÇÃO DA AGÊNCIA VOYAGER           |
   ===============================================
   |   Viajante : ${viajante.nomeViajante}       |
   |   Idade    : ${viajante.idadeViajante} anos |
   |   Orçamento: ${viajante.orcamento}          |
   |   Destino  : ${destino}                     |
   ===============================================
   Boa viagem, ${viajante.nomeViajante}! O ${destino} espera por voce.
`)

let um = 'economico';
let dois = 'moderado';
let tres = 'luxo';

switch(viajante.orcamento){
    case um:
        console.log('Dica: Procure voos com antecendencia e use hostels ou Airbnb!')
        break;
    case dois:
        console.log('Dica: Hoteis 3 estrelas e pacotes combinados sao otimas opcoes')
        break;
    case tres:
        console.log('Dica: Resorts all-inclusive e voos executivos sao a sua praia!')
        break;
    default:
        console.log('Opcao invalida. Encerrando o formulario')
}