var a = 'TypeScript compilado novo com run dev !';
console.log(a);
// TIPOS
// CASO DECLARE A VARIAVEL SEM ATRIBUIR NADA EXPLICITAMENTE
// ASSUME O TIPO __ ANY
// NUMEROS
var numero = 10;
console.log(numero);
// STRING
var nome = 'Joao';
console.log(nome);
// BOOLEAN
var estaLigado = false;
console.log(estaLigado);
// ARRAY
var arr = ['Pessoa', 'Trabalho', 100];
console.log(arr);
// TUPLAS
var tup = ['Rua principal', 1239]; // TENDO QUE DEFINIR TODOS OS TIPOS DOS ELEMENTOS, QUANTIDADE IMPORTA
console.log(tup);
// ENUM
var cores;
(function (cores) {
    cores[cores["amarelo"] = 0] = "amarelo";
    cores[cores["cinza"] = 1] = "cinza";
    cores[cores["verde"] = 2] = "verde";
    cores[cores["vermelho"] = 10] = "vermelho";
    cores[cores["roxo"] = 11] = "roxo";
})(cores || (cores = {}));
var minhaCor = cores.vermelho;
console.log(minhaCor);
console.log(cores.amarelo, cores.roxo);
// FUNCOES
function dizNome() {
    return nome; // PRECISA RETORNAR SEMELHANTE AO TIPO SETADO
}
function falaOi() {
    console.log('Oi');
    // return nome 
}
console.log(dizNome());
falaOi();
function multiplica(numA, numB) {
    return numA * numB;
}
console.log(multiplica(2, 4.8));
// TIPO FUNCAO
var calculo;
calculo = multiplica;
console.log(calculo(3, 5));
