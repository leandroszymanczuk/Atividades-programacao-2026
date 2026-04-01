// ============================================================
//   ATIVIDADE 02-2 – Objetos em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Use console.log() para exibir os resultados.
// ============================================================


// ------------------------------------------------------------
// EXERCÍCIO 1 – Criando objetos
// ------------------------------------------------------------
// a) Crie um objeto "aluno" com as propriedades: nome, idade, curso.
// b) Exiba o nome do aluno usando notação ponto.

// → Seu código aqui:
 let aluno = {
     nome : "Leandro Szymanczuk",
     idade : 26,
     curso : "logica de programação"
 }
console.log(`"nome da pessoa"; ${aluno.nome}`);



// ------------------------------------------------------------
// EXERCÍCIO 2 – Aninhamento e acesso
// ------------------------------------------------------------
// a) Adicione uma propriedade "endereco" ao objeto com cidade e rua.
// b) Exiba a cidade

  
  aluno.endereco = {
    cidade: "São Paulo",
    rua: "Rua das Flores"
  };
  

  console.log("Cidade:", aluno.endereco.cidade);

console.log("_______________________________");


// ------------------------------------------------------------
// EXERCÍCIO 3 – Habilidades (array dentro do objeto)
// ------------------------------------------------------------
// a) Adicione uma propriedade "habilidades" (array) ao objeto "aluno".
// b) Exiba a primeira habilidade.

// → Seu código aqui:
  aluno.habilidades = ["JavaScript", "HTML", "CSS"];

console.log(aluno.habilidades[0]);



// ------------------------------------------------------------
// EXERCÍCIO 4 – Notas e média
// ------------------------------------------------------------
// a) Adicione uma propriedade "notas", sendo esse um array de números.
// b) Exiba em uma única frase, o nome do aluno e suas notas.

// → Seu código aqui:
aluno.notas = [7, 8.5, 9];


console.log(`O aluno ${aluno.nome} tirou as notas: ${aluno.notas.join(", ")}.`);


// ------------------------------------------------------------
// EXERCÍCIO 5 – Objetos aninhados e alteração
// ------------------------------------------------------------
// a) Adicione uma propriedade "responsavel" que é um objeto com nome e parentesco (mãe ou pai ou irmão, etc).
// b) Exiba o nome do responsável.
// c) Altere o nome do responsável e mostre que o objeto foi atualizado.

// → Seu código aqui:   
aluno.responsaveis ={   
    nome: "fernando ",
    parentesco: " geovane "  

}
console.log("os dois responsaveis são ")
// ------------------------------------------------------------
// EXERCÍCIO 6 – Lista de alunos (array de objetos)
// ------------------------------------------------------------
// a) Crie      dados de outros alunos.
// c) Adicione os outros alunos na lista de alunos.
// c) Exiba o nome do segundo aluno da lista.
const listaDeAlunos = [];
listaDeAlunos.push(aluno);
 const aluno1 =         {
  nome: "fabio",
  idade: 26,
  notas: [7, 8.5, 9, 6.5],
  responsavel: {
    nome: "Carlos",
    parentesco: "pai"
  }
};


const aluno2 = {
  nome: "Bruno",
  idade: 21,
  notas: [6, 7.5, 8],
  responsavel: {
    nome: "Mariana",
    parentesco: "mãe"
  }
};

const aluno3 = {
  nome: "Carla",
  idade: 20,
  notas: [9, 8.5, 10],
  responsavel: {
    nome: "Roberto",
    parentesco: "pai"
  }
};


listaDeAlunos.push(aluno2);
listaDeAlunos.push(aluno3);
console.log(listaDeAlunos)

console.log("Segundo aluno:", listaDeAlunos[1].nome);

// ------------------------------------------------------------
// EXERCÍCIO 7 – Objetos e Arrays
// ------------------------------------------------------------
// a) Crie um array "listaDeAlunos" que contenha 3 alunos. Cada aluno deve ser um objeto (não uma variável que contem um objeto).
// b) Cada objeto aluno deve conter nome(string), idade(number) e notas(array de numbers).
// c) Exiba o nome e as notas de cada aluno.


// → Seu código aqui:



let listaDeAlunos = [
    {
      nome: "Ana",
      idade: 19,
      notas: [7, 8.5, 9]
    },
    {
      nome: "Bruno",
      idade: 21,
      notas: [6, 7.5, 8]
    },
    {
      nome: "Carla",
      idade: 20,
      notas: [9, 8.5, 10]
    }
  ];
  
  listaDeAlunos.forEach(aluno => {
    console.log(`Aluno: ${aluno.nome} | Notas: ${aluno.notas.join(", ")}`);
  });