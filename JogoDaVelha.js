let lerTeclado = require("readline-sync")


console.log("\n #-# Seja Bem-Vindo ao Jogo da Velha!#-#\n")

let tabuleiro = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
];
console.table(tabuleiro);

let jogador = "X";
let jogadas = 0;
let venceu = false;

while (jogadas < 9 && !venceu) {
    let linha = lerTeclado.questionInt(`\nJogador ${jogador}, linha (0 a 2): `);
    let coluna = lerTeclado.questionInt(`Jogador ${jogador}, coluna (0 a 2): `);

  
    if (linha >= 0 && linha < 3 && coluna >= 0 && coluna < 3) {
        
        if (tabuleiro[linha][coluna] === "-") {
            tabuleiro[linha][coluna] = jogador;
            jogadas++;
            console.table(tabuleiro);

            
            let i = 0;
            while (i < 3) {
                if (tabuleiro[i][0] !== "-" && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) {
                    venceu = true;
                }
                if (tabuleiro[0][i] !== "-" && tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i]) {
                    venceu = true;
                }
                i++;
            }

           
            if (tabuleiro[0][0] !== "-" && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
                venceu = true;
            }
            if (tabuleiro[0][2] !== "-" && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) {
                venceu = true;
            }

            if (venceu) {
                console.log(`\n Parabéns! Jogador ${jogador} venceu!`);
            } else if (jogadas === 9) {
                console.log("\nDeu velha! Empate.");
            } else {
                
                jogador = jogador === "X" ? "O" : "X";
            }
        } else {
            console.log("\n Posição já ocupada! Tente outra.");
        }
    } else {
        console.log("\n Coordenadas inválidas! Digite valores entre 0 e 2.");
    }
}