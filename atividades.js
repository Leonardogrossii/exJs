/* 1. Crie um programa que imprima na tela a tabuada de multiplicação de um
número digitado pelo usuário, utilizando um loop while. 
 */
/* const numero = parseInt(prompt("Digite um número para a tabela de multiplicação:"));


if (isNaN(numero)) {
  alert("Por favor, insira valores os numéricos da sua escolha.");
} else {
  alert(`Tabela de Multiplicação do ${numero} até o limite ${10}:\n\n${gerarTabelaMultiplicacao(numero, 10)}`);
}
function gerarTabelaMultiplicacao(numero) {
  let tabela = "";
  let i = 1;
  while (i <= 10) {
    // Seu código aqui

   
  /* //Qual o erro na linha do meu codigo?  while (let i = 1; i <= 10; i++) {

  ChatGPT
  O erro na linha do seu código está relacionado ao uso do let dentro da declaração do loop while. O correto seria usar a estrutura de controle for em vez do while para a inicialização da variável i com let. O loop for é mais apropriado para esse tipo de situação. Aqui está a correção:
  
  javascript
  Copy code
  for (let i = 1; i <= 10; i++) {
      // Seu código aqui
  }
  No código original, o let está sendo usado como parte da declaração do loop, mas a sintaxe correta para um loop while não inclui essa construção. Se você quiser usar um loop while, a declaração da variável i deve ser feita antes do loop, e a atualização de i deve ocorrer dentro do corpo do loop. Algo assim:* */
/*     tabela += `${numero} x ${i} = ${numero * i}\n`;
    i++
  }
  return tabela; */


/* 2. Faça um programa que leia o nome e a idade de 5 pessoas e imprima na
tela o nome da pessoa mais velha. */

/* let nomeMaisVelho;
let idadeMaisVelho = -Infinity; // Inicia com um
//valor baixo para garantir que o primeiro valor digitado será maior
for (let i = 0; i < 5; i++) {
let nome = prompt ("Digite o nome da " +
(i+1) + "a pessoa:");
let idade = parseInt(prompt ("Digite a idade da " + (i+1) + "a pessoa:"));
if (idade > idadeMaisVelho) {
idadeMaisVelho = idade;
nomeMaisVelho = nome;
}
}
alert ('A pessoa mais velha é:' + nomeMaisVelho); */



/* 3. Escreva um programa que peça ao usuário para digitar um número e
imprima na tela se ele é par ou ímpar, utilizando um loop do while. */

/* let numero; */

/* do {
numero = parseInt (prompt("Digite um número inteiro positivo:"));
} while (isNaN (numero) || numero <= 0);
if (numero % 2 == 0) {
alert("0 número" + numero +
"é par.");
} else {
alert("O número " + numero +"é impar.");
} */

/* 4. Faça um programa que gere 10 números aleatórios entre 1 e 100 e imprima
na tela a média desses números, utilizando um loop for.  */
/* let numeroAleatorio =
Math.floor(Math.random() * 100) + 1;

  for (let i = 1; i <= 10; i++) {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    alert(`Número aleatório ${i}: ${numeroAleatorio}`);
  }  */

/*  let soma=0;
 let media =0;
 for (let i = 1; i <= 10; i++) {
   let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
   alert(`Número aleatório ${i}: ${numeroAleatorio}`);
 soma+numeroAleatorio;
 }
 media=soma/10; */


/*  5. Crie um programa que leia uma palavra digitada pelo usuário e verifique
se ela é um palíndromo (ou seja, se é escrita da mesma forma tanto da
esquerda para a direita quanto da direita para a esquerda), utilizando
um loop do while. */

/* let palavra = prompt("Digite uma palavra:");
let tam = palavra.length;
let i = 0;
let palindromo = true;
while (i < tam / 2) {
    if (palavra[i] !== palavra[tam - i - 1]) {
        palindromo = false;
        break;
    }
    i++
}
if (palindromo) {
    alert(palavra + " é um palíndromo!")
} else {
    alert(palavra + " não é um palíndromo!");
} */

