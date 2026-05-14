const lerTeclado = require("readline-sync");

function calculadora() {

    let continuar = true;

    while (continuar) {

        console.log("\n========================");
        console.log("      CALCULADORA");
        console.log("========================");

        let numero1 = lerTeclado.questionFloat("Digite o primeiro numero: ");
        let numero2 = lerTeclado.questionFloat("Digite o segundo numero: ");

        console.log("\nEscolha uma operacao:");
        console.log("1 - Soma");
        console.log("2 - Subtracao");
        console.log("3 - Multiplicacao");
        console.log("4 - Divisao");
        console.log("0 - Sair");

        let opcao = lerTeclado.questionInt("Digite a opcao: ");

        switch (opcao) {

            case 1:
                console.log(`\n${numero1} + ${numero2} = ${numero1 + numero2}`);
                break;

            case 2:
                console.log(`\n${numero1} - ${numero2} = ${numero1 - numero2}`);
                break;

            case 3:
                console.log(`\n${numero1} * ${numero2} = ${numero1 * numero2}`);
                break;

            case 4:

                if (numero2 !== 0) {
                    console.log(`\n${numero1} / ${numero2} = ${numero1 / numero2}`);
                } else {
                    console.log("\nErro: divisao por zero!");
                }

                break;

            case 0:
                console.log("\nEncerrando calculadora...");
                continuar = false;
                break;

            default:
                console.log("\nOpcao invalida!");
        }
    }
}
