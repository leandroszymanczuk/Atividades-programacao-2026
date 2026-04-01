// ============================================================
//   DESAFIOS (para quem já terminou a atividade 08) – Switch / Case
// ============================================================
// Instruções: resolva cada desafio no espaço indicado.
// ============================================================

let lerTeclado = require("readline-sync")   

// ------------------------------------------------------------
// DESAFIO 1 – Simulador de caixa de restaurante
// ------------------------------------------------------------
// Crie uma lista de objetos para o Cardápio:
//   1 – Frango Grelhado  R$ 32,00
//   2 – Filé ao Molho    R$ 45,00
//   3 – Massa Italiana   R$ 28,00
//   4 – Salada Caesar    R$ 22,00
//   5 – Sopa do Dia      R$ 18,00
//
// Crie uma lista de objetos para as Bebidas:
//   1 – Suco Natural     R$ 9,00
//   2 – Refrigerante     R$ 7,00
//   3 – Água             R$ 4,00
//   4 – Sem bebida       R$ 0,00
//
// a) Pergunte ao usuário:
//    - Nome pessoal.
//    - Número do prato desejado.
//    - Número da bebida desejada.
// b) Com switch/case, determine o prato e o preço do prato,
//    e outro switch para a bebida e seu preço.
//    Para opções inválidas, exiba "Item inválido." e use preço 0.
// c) Armazene os dados em um objeto "pedido":
//    nomeCliente, nomePrato, precoPrato, nomeBebida, precoBebida, total.
// d) Pergunte se vai pagar no pix (keyInYN()).
//    Se sim, aplique 10% de desconto no total.
//    Atualize o total no objeto.
// e) Exiba o objeto com console.table().
// f) Exiba o recibo final com template literal.

// → Seu código aqui:

// const cardapio = [
//     { id: 1, nome: "Frango Grelhado", preco: 32.00 },
//     { id: 2, nome: "Filé de molho ", preco: 45.00 },
//     { id: 3, nome: "Massa Italiana", preco: 28.00 },
//     { id: 4, nome: "Salada Caesar", preco: 22.00 },
//     { id: 5, nome: "Sopa do Dia", preco: 18.00 }
// ];
// const bebidas = [
//     { id: 1, nome: "Suco Natural", preco: 9.00 },
//     { id: 2, nome: "Refrigerante", preco: 7.00 },
//     { id: 3, nome: "Agua ", preco: 4.00 },
//     { id: 4, nome: "Sem bebida ", preco: 0.00 },
// ];
// const nomeCliente =lerTeclado.question("Digite seu nome: ");
// const numPrato = lerTeclado.questionInt("Escolha o número do prato (1 a 5): ");
// const numBebida = lerTeclado.questionInt("Escolha o número da bebida (1 a 4): ");

// let nomePrato, precoPrato;

// switch (numPrato) {
//     case 1:
//       nomePrato = "Frango Grelhado";
//       precoPrato = 32.00;
//       break;
//     case 2:
//       nomePrato = "Filé ao Molho";
//       precoPrato = 45.00;
//       break;
//     case 3:
//       nomePrato = "Massa Italiana";
//       precoPrato = 28.00;
//       break;
//     case 4:
//       nomePrato = "Salada Caesar";
//       precoPrato = 22.00;
//       break;
//     case 5:
//       nomePrato = "Sopa do Dia";
//       precoPrato = 18.00;
//       break;
//     default:
//       console.log("Item inválido.");
//       nomePrato = "Inválido";
//       precoPrato = 0;
//   }
  
// let nomeBebida, precoBebida;
  
//   switch (numBebida) {
//     case 1:
//       nomeBebida = "Suco Natural";
//       precoBebida = 9.00;
//       break;
//     case 2:
//       nomeBebida = "Refrigerante";
//       precoBebida = 7.00;
//       break;
//     case 3:
//       nomeBebida = "Água";
//       precoBebida = 4.00;
//       break;
//     case 4:
//       nomeBebida = "Sem bebida";
//       precoBebida = 0.00;
//       break;
//     default:
//       console.log("Item inválido.");
//       nomeBebida = "Inválido";
//       precoBebida = 0;
// }
  
// let total = precoPrato + precoBebida;
  
// let pedido = {
//     nomeCliente: nomeCliente,
//     nomePrato: nomePrato,
//     precoPrato: precoPrato,
//     nomeBebida: nomeBebida,
//     precoBebida: precoBebida,
//     total: total
// };
  
 
// const pagarPix = lerTeclado.keyInYN("Vai pagar no PIX? ");
  
// if (pagarPix) {
//     pedido.total = pedido.total * 0.9; // desconto de 10%
// }
  

// console.table(pedido);
  

// console.log(`
// ===== RECIBO =====
// Cliente: ${pedido.nomeCliente}
// Prato: ${pedido.nomePrato} - R$ ${pedido.precoPrato.toFixed(2)}
// Bebida: ${pedido.nomeBebida} - R$ ${pedido.precoBebida.toFixed(2)}
// Total a pagar: R$ ${pedido.total.toFixed(2)}
// ==================
// `);


console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 2 – Conversor de unidades
// ------------------------------------------------------------
// a) Pergunte ao usuário:
//    - O valor a converter (questionFloat()).
//    - O tipo de conversão (questionInt()):
//      1 – Km para Milhas
//      2 – Milhas para Km
//      3 – Celsius para Fahrenheit
//      4 – Fahrenheit para Celsius
//      5 – Kg para Libras
//      6 – Libras para Kg
// b) Com switch/case, aplique a fórmula correta:
//    - Km → Milhas:         valor * 0.621371
//    - Milhas → Km:         valor * 1.60934
//    - Celsius → Fahrenheit: (valor * 9/5) + 32
//    - Fahrenheit → Celsius: (valor - 32) * 5/9
//    - Kg → Libras:         valor * 2.20462
//    - Libras → Kg:         valor / 2.20462
//    - default: "Tipo de conversão inválido."
// c) Armazene a conversão em um objeto:
//    tipo, valorOriginal, unidadeOriginal, resultado, unidadeResultado.
// d) Exiba o objeto com console.table().
// e) Exiba: "<valorOriginal> <unidadeOriginal> = <resultado> <unidadeResultado>"

// → Seu código aqui:
const valor = lerTeclado.questionFloat("Digite o valor a converter: ");
const tipo = lerTeclado.questionInt(`Escolha o tipo de conversao: 1 – Km para Milhas 2 – Milhas para Km
3 – Celsius para Fahrenheit 4 – Fahrenheit para Celsius 5 – Kg para Libras 6 – Libras para Kg Opcao: `);

let resultado;
let unidadeOriginal;
let unidadeResultado;
let tipoDescricao;
switch (tipo) {
    case 1:
        resultado = valor * 0.621371;
        unidadeOriginal = "Km";
        unidadeResultado = "Milhas";
        tipoDescricao = "Km para Milhas";
        break;
    case 2:
        resultado = valor * 1.60934;
        unidadeOriginal = "Milhas";
        unidadeResultado = "Km";
        tipoDescricao = "Milhas para Km";
        break;
    case 3:
        resultado = (valor * 9/5) + 32;
        unidadeOriginal = "Celsius";
        unidadeResultado = "Fahrenheit";
        tipoDescricao = "Celsius para Fahrenheit";
        break;
    case 4:
        resultado = (valor - 32) * 5/9;
        unidadeOriginal = "Fahrenheit";
        unidadeResultado = "Celsius";
        tipoDescricao = "Fahrenheit para Celsius";
        break;
    case 5:
        resultado = valor * 2.20462;
        unidadeOriginal = "Kg";
        unidadeResultado = "Libras";
        tipoDescricao = "Kg para Libras";
        break;
    case 6:
        resultado = valor / 2.20462;
        unidadeOriginal = "Libras";
        unidadeResultado = "Kg";
        tipoDescricao = "Libras para Kg";
        break;
    default:
        console.log("Tipo de conversão inválido.");
        resultado = 0;
        unidadeOriginal = "-";
        unidadeResultado = "-";
        tipoDescricao = "Inválido";
}

const conversao = {
    tipo: tipoDescricao,
    valorOriginal: valor,
    unidadeOriginal: unidadeOriginal,
    resultado: resultado,
    unidadeResultado: unidadeResultado
};

console.table(conversao);

console.log(`${valor} ${unidadeOriginal} = ${resultado.toFixed(2)} ${unidadeResultado}`);
// console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 3 – Jogo de pedra, papel e tesoura
// ------------------------------------------------------------
// a) Gere a jogada do computador aleatoriamente:
//    const jogada = ["pedra", "papel", "tesoura"];
//    const computador = jogada[Math.floor(Math.random() * 3)];
// b) Pergunte ao usuário sua jogada - questionInt():
//    1 – Pedra | 2 – Papel | 3 – Tesoura
//    Para opções inválidas, exiba "Jogada inválida." e encerre.
// c) Exiba as jogadas: "Você: <jogada> | Computador: <computador>"
// d) Determine o vencedor ou empate com switch/case aninhado ou combinando
//    switch com if/else
// e) Exiba o resultado final.

// → Seu código aqui:

// const jogadas = ["pedra", "papel", "tesoura"];
// const computador = jogadas[Math.floor(Math.random() * 3)];

// const escolha = lerTeclado.questionInt(`
// ESCOLHA SUA JOGADA 
// 1 - Pedra 
// 2 - Papel 
// 3 - Tesoura 
// opcao: 
// `)
// let usuario;

// switch (escolha) {
//     case 1:
//         usuario = "pedra";
//         break;
//     case 2:
//         usuario = "papel";
//         break;
//     case 3:
//         usuario = "tesoura";
//         break;
//     default:
//         console.log("Jogada inválida."); 
//         process.exit();
// }
// onsole.log(`Você: ${usuario} | Computador: ${computador}`);

// let resultado;

// if (usuario === computador) {
//     resultado = "Empate!";
// } else {
//     switch (usuario) {
//         case "pedra":
//             resultado = (computador === "tesoura") ? "Você venceu!" : "Computador venceu!";
//             break;
//         case "papel":
//             resultado = (computador === "pedra") ? "Você venceu!" : "Computador venceu!";
//             break;
//         case "tesoura":
//             resultado = (computador === "papel") ? "Você venceu!" : "Computador venceu!";
//             break;
//     }
// }

// console.log(`Resultado: ${resultado}`);

    
console.log("_______________________________");


// ------------------------------------------------------------
// DESAFIO 4 – Sistema de suporte técnico
// ------------------------------------------------------------
// Um sistema de atendimento automatizado funciona por menus.
//
// Menu principal (questionInt()):
//   1 – Internet | 2 – TV | 3 – Telefone | 4 – Falar com atendente | 0 – Encerrar
//
// Se o usuário escolher 1 (Internet), exiba um sub-menu (questionInt()):
//   1 – Sem conexão
//   2 – Conexão lenta
//   3 – Wi-Fi não aparece
//
// Se o usuário escolher 2 (TV), exiba um sub-menu (questionInt()):
//   1 – Sem sinal
//   2 – Imagem ruim
//   3 – Canais sumidos
//
// Para cada sub-opção, exiba uma mensagem de orientação específica.
// Para as opções 3 (Telefone) e 4 (Falar com atendente), exiba "Por favor, aguarde na linha.".
// Para a opção 0, exiba "Atendimento encerrado."
// No default, exiba "Opção inválida."
//
// a) Implemente o fluxo acima usando switch/case no menu principal
//    e switch/case nos sub-menus, com if/else se necessário.
// b) Exiba todas as mensagens com template literal.

// → Seu código aqui:


// const opcao = lerTeclado.questionInt(
// `===== SUPORTE TÉCNICO =====
// 1 – Internet
// 2 – TV
// 3 – Telefone
// 4 – Falar com atendente
// 0 – Encerrar
// Escolha uma opção: `
// );

// switch (opcao) {

//     case 1: 
//         const internet = lerTeclado.questionInt(
// `--- Internet ---
// 1 – Sem conexão
// 2 – Conexão lenta
// 3 – Wi-Fi não aparece
// Escolha uma opção: `
//         );

//         switch (internet) {
//             case 1:
//                 console.log(`Verifique se o modem está ligado e os cabos conectados.`);
//                 break;
//             case 2:
//                 console.log(`Tente reiniciar o roteador e reduzir dispositivos conectados.`);
//                 break;
//             case 3:
//                 console.log(`Reinicie o roteador e verifique se o Wi-Fi está ativado.`);
//                 break;
//             default:
//                 console.log(`Opção inválida.`);
//         }
//         break;

//     case 2: 
//         const tv = lerTeclado.questionInt(
// `--- TV ---
// 1 – Sem sinal
// 2 – Imagem ruim
// 3 – Canais sumidos
// Escolha uma opção: `
//         );

//         switch (tv) {
//             case 1:
//                 console.log(`Verifique os cabos e reinicie o aparelho.`);
//                 break;
//             case 2:
//                 console.log(`Ajuste a antena ou verifique a conexão HDMI.`);
//                 break;
//             case 3:
//                 console.log(`Faça uma nova busca de canais no menu da TV.`);
//                 break;
//             default:
//                 console.log(`Opção inválida.`);
//         }
//         break;

//     case 3: 
//         console.log(`Por favor, aguarde na linha.`);
//         break;

//     case 4:
//         console.log(`Por favor, aguarde na linha.`);
//         break;

//     case 0: 
//         console.log(`Atendimento encerrado.`);
//         break;

//     default:
//         console.log(`Opção inválida.`);
// }
console.log("_______________________________");