const a: string =  'TypeScript compilado novo com run dev !'
console.log(a)

// TIPOS

// CASO DECLARE A VARIAVEL SEM ATRIBUIR NADA EXPLICITAMENTE
// ASSUME O TIPO __ ANY

// NUMEROS
const numero: number = 10
console.log(numero)

// STRING
const nome: string = 'Joao'
console.log(nome)

// BOOLEAN
const estaLigado: boolean = false
console.log(estaLigado)

// ARRAY
const arr: any[] = ['Pessoa','Trabalho', 100]
console.log(arr)

// TUPLAS
const tup: [string, number] = ['Rua principal', 1239] // TENDO QUE DEFINIR TODOS OS TIPOS DOS ELEMENTOS, QUANTIDADE IMPORTA
console.log(tup)

// ENUM
enum cores {
    amarelo,
    cinza,
    verde,
    vermelho =10,
    roxo
}

const minhaCor:cores =cores.vermelho

console.log(minhaCor)
console.log(cores.amarelo, cores.roxo)

// FUNCOES

function dizNome(): string {
    return nome // PRECISA RETORNAR SEMELHANTE AO TIPO SETADO
}

function falaOi(): void { // VAZIO
    console.log('Oi')
    // return nome 
}

console.log(dizNome())
falaOi()

function multiplica(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplica(2,4.8))


// TIPO FUNCAO

let calculo: (a: number, b: number) => number
calculo = multiplica
console.log(calculo(3,5))