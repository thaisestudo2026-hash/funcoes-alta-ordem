
// Exercicio 1

const precos = [10.0, 20.0, 50.0, 100.0];

const desconto = precos.map(x => x * 0.85);

console.log("Exercicio 1.1");
console.log(desconto);


const usuarios = ['ana', 'paulo', 'lucas'];

const nomes = usuarios.map(x => x.toUpperCase());

console.log("Exercicio 1.2");
console.log(nomes);


const idades = [15, 18, 21, 30];

const maioridade = idades.map(x => x >= 18);

console.log("Exercicio 1.3");
console.log(maioridade);


// Exercicio 2

const notas = [4.5, 7.0, 8.5, 5.0, 6.5, 3.0];

const aprovados = notas.filter(x => x >= 6.0);

console.log("Exercicio 2.1");
console.log(aprovados);


const linguagens = ['JavaScript', 'C', 'Python', 'Go', 'Java'];

const linguagensMaiores = linguagens.filter(x => x.length > 4);

console.log("Exercicio 2.2");
console.log(linguagensMaiores);


const numeros = [12, 17, 20, 25, 33, 40];

const numerosImpares = numeros.filter(x => x % 2 != 0);

console.log("Exercicio 2.3");
console.log(numerosImpares);


// Exercicio 3

const vendas = [120, 250, 300, 80];

const total = vendas.reduce((x, y) => x + y, 0);
const media = total / vendas.length;

console.log("Exercicio 3.1");
console.log("Total:", total);
console.log("Media:", media);


const carrinhoVazio = [];

const soma = carrinhoVazio.reduce((x, y) => x + y, 0);

console.log("Exercicio 3.2");
console.log(soma);


const fatores = [1, 2, 3, 4, 5];

const fatorial = fatores.reduce((x, y) => x * y, 1);

console.log("Exercicio 3.3");
console.log(fatorial);


// Exercicio 4

const pontuacoes = [40, 100, 1, 5, 25, 10];

const ordem = [...pontuacoes].sort();

console.log("Exercicio 4.1");
console.log(ordem);

const crescente = [...pontuacoes].sort((x, y) => x - y);

console.log(crescente);


const cidades = ['Cuiaba', 'Rondonopolis', 'Sinop', 'Varzea Grande'];

const cidadesOrdem = [...cidades].sort((x, y) => y.length - x.length);

console.log("Exercicio 4.2");
console.log(cidadesOrdem);


// Exercicio 5

const dados = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = dados
    .filter(x => x % 2 == 0)
    .map(x => x * x)
    .reduce((x, y) => x + y, 0);

console.log("Exercicio 5");
console.log(resultado);
