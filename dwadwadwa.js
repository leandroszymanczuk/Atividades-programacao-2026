let contatos = [];
let adicionar;

do {
    let nomeContato = readline.question("Nome do contato: ");
    let telefone = readline.question("Telefone do contato: ");
    contatos.push({ nome: nomeContato, telefone: telefone });
    adicionar = readline.keyInYNStrict("Adicionar outro contato?");
} while (adicionar);

console.table(contatos);
console.log(`Total de contatos cadastrados: ${contatos.length}`)