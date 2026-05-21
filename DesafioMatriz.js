// DESAFIO 1 – Jogo da velha simplificado
// ------------------------------------------------------------
// a) Declare um tabuleiro 3x3 vazio (preencha os espaços vazios com "-") e exiba-o.
// b) Faça 5 jogadas alternando entre "X" e "O":
//    - Peça a linha e a coluna.
//    - Se a posição já estiver ocupada, exiba aviso e peça novamente.
//    - Após cada jogada, exiba o tabuleiro com console.table().
// c) Não precisa verificar vencedor — apenas alternar X e O.

// → Seu código aqui:
let tabuleiro = [
    ["-","-","-"]
    ["-","-","-"]
    ["-","-","-"]
]

let linha = null
let coluna = null
let continuar = true 
do {
    linha = lerTeclado.questionInt(`Digite uma linha: `)
    coluna = lerTeclado.questionInt(`Digite uma coluna: `)
    if(tabuleiro[linha - 1][coluna - 1] === "-") {

    }
}
