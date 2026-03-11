// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
//
// Dica: Ao terminar um exercício, comente-o. Assim os dados não serão solicitados novamente.
// ============================================================
let lerTeclado = require("readline-sync")

// ------------------------------------------------------------
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:

//console.log("iniciando programa");
//console.info("info : exemplo de console.info");
//console.warn("Aviso : Sempre que for exibir o usuario, inicia o programa com node e o nome do arquivo");
//console.error("error : Algo deu errado");

// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."

// → Seu código aqui:
// const nomeUsuario = lerTeclado.question("Digite seu nome: ");
// const idadeDoUsuario = lerTeclado.questionInt("Digite sua idade:");

// console.log(`Olá, ${nomeUsuario}! Eu tenho ${idadeDoUsuario} anos`);


// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:
//let nomeDoUsuario = lerTeclado.question("Digite seu nome"); 
//let idadeDoUsuario = lerTeclado.question("Digite sua idade");
//let cidadeDoUsuario = lerTeclado.question("Digite sua cidade");

//let ficha = {
 //   nome: nomeDoUsuario,
  //  idade: idadeDoUsuario,
//    cidade: cidadeDoUsuario
//};

//console.table(ficha)


// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:
//let pergunta01 = lerTeclado.keyInYN("Você sabe jogar bola?")
//let pergunta02 = lerTeclado.keyInYN("Você gosta de frutas?")
//let pergunta03 = lerTeclado.keyInYN("Você pratica esportes")


//console.log(`Leandro ${pergunta01 ? "Sabe jogar bola" : " Não sabe jogar bola "} mas ${pergunta02 ? "Gosta de frutas" : "Não gosto de frutas"} pratica algum esporte ${pergunta03 ? "faz algum esporte" : "não faço"}`)


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:
 
//let comidasFavoritas01 = lerTeclado.question("Você gosta de banana?")
//let comidasFavoritas02 = lerTeclado.question("Você gosta de salgados")
//let comidasFavoritas03 = letTeclado.question("Você gosta bolo ")

//let comidasFavoritas = [comidasFavoritas01 , comidasFavoritas02 , comidasFavoritas03]

//console.table(listaDeComidas);


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:
// let nome = lerTeclado.question("Nome do usuario");
// let cidade = lerTeclado.question("Qual sua cidade ");
// let idade = lerTeclado.question("Qual sua idade? ")

// let cadastroPessoal = {
//     nome: nome,
//     cidade: cidade,
//     idade: idade 
    
// }
// console.log(`me chamo: ${cadastroPessoal.nome} moro ${cadastroPessoal.cidade} tenho ${cadastroPessoal.idade}`)

// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:
// let n_nome1 = lerTeclado.question("digite seu nome")
// let i_idade1 = lerTeclado.question("Digite sua idade ")
// let city_cidade1 = lerTeclado.question("Digite sua cidade")
// let r_rua1 = lerTeclado.question("digite usa rua")
// let c_number1 = lerTeclado.question("Digite o numero da sua casa")

// let nome1 = {
//     nome: n_nome1,
//     idade : i_idade1,
//     cidade : city_cidade1,
//     rua : r_rua1,
//     casa : c_number1 

// }

// let n_nome2 = lerTeclado.question("digite seu nome")
// let i_idade2 = lerTeclado.question("Digite sua idade ")
// let city_cidade2 = lerTeclado.question("Digite sua cidade")
// let r_rua2 = lerTeclado.question("digite usa rua")
// let c_number2 = lerTeclado.question("Digite o numero da sua casa")

// let nome2 = {
//     nome : n_nome2,
//     idade : i_idade2,
//     cidade : city_cidade2,
//     rua : r_rua2,
//     casa : c_number2 

// }
// let nome_3 = lerTeclado.question("digite seu nome")
// let i_idade3 = lerTeclado.question("Digite sua idade ")
// let city_cidade3 = lerTeclado.question("Digite sua cidade")
// let r_rua3 = lerTeclado.question("digite usa rua")
// let c_number3 = lerTeclado.question("Digite o numero da sua casa")

// let nome3 = {
//     nome : nome_3,
//     idade : i_idade3,
//     endereço : { 
//       city_cidade3,
//     rua : r_rua3,
//     casa : c_number3
//     }
// }
// let listaDeUsuarios = [nome1 , nome2, nome3]
// console.table(listaDeUsuarios)
// console.log(nome2.nome, nome.idade)
// console.table(nome3.endereço)
// console.log(nome1.nome, nome.rua)
// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:
// let aluno01 = lerTeclado.question("Nome do aluno")
// let n01_aluno01= lerTeclado.question(`nota 1 do aluno ${aluno01}:`)
// let n02_aluno01= lerTeclado.question(`nota 2 do aluno ${aluno01}:`)
// let n03_aluno01= lerTeclado.question(`nota 3 do aluno ${aluno01}}`)

// let aluno01 = lerTeclado.question("Nome do aluno")
// let n01_aluno01= lerTeclado.question(`nota 1 do aluno ${aluno02}:`)
// let n02_aluno01= lerTeclado.question(`nota 2 do aluno ${aluno02}:`)
// let n03_aluno01= lerTeclado.question(`nota 3 do aluno ${aluno02}}`)

// let aluno01 = lerTeclado.question("Nome do aluno")
// let n01_aluno01= lerTeclado.question(`nota 1 do aluno ${aluno03}:`)
// let n02_aluno01= lerTeclado.question(`nota 2 do aluno ${aluno03}:`)
// let n03_aluno01= lerTeclado.question(`nota 3 do aluno ${aluno03}}`)
 
let aluno01 = {
    nome: lerTeclado.question("Digite o nome do primeiro aluno"),
    notas: [lerTeclado.questionInt(" Digite a primeira nota"),lerTeclado.questionInt(" Digite a segunda nota"),lerTeclado.questionInt(" Digite a terceira nota")] 
}

let aluno02 = {
    nome: lerTeclado.question("Digite o nome do segundo aluno"),
    notas: [lerTeclado.questionInt(" Digite a primeira nota"),lerTeclado.questionInt(" Digite a segunda nota"),lerTeclado.questionInt(" Digite a terceira nota")]

}
let aluno03 = {
    nome: lerTeclado.question("Digite o nome do terceiro aluno"),
    notas: [lerTeclado.questionInt(" Digite a primeira nota"),lerTeclado.questionInt(" Digite a segunda nota"),lerTeclado.questionInt(" Digite a terceira nota")]

}
let turma = [aluno01 , aluno02, aluno03]
console.table (turma)
console.log(turma[1].nome, turma[1].notas[0])
console.log(turma[2].nome, turma[2].notas[1])
console.log(turma[0].nome, turma[0].notas[2])
// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:

let nome = lerTeclado.question("nome:")
let categoria = lerTeclado.question("categoria:")
let preço = lerTeclado.question("preço:")
let quantidade = lerTeclado.question("quantidade")
console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.