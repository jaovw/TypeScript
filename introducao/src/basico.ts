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

// OBJ

// ALIAS - DANDO POSSIBILIDADE DE REPICAR PARA OS DEMAIS TIPOS
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Ana', 'Joao'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horario'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))

// UNION TYPES 
let nota: number | string // DANDO LIBERDADE NA HORA DA CHECAGEM DO TIPO

nota = 10
console.log(`Minha nota e ${nota}`)

nota = '9'
console.log(`Minha nota e ${nota}`)

// NEVER - PARA UMA FUNCAO QUE NAO TERMINA CORRETAMENTE, NESSE CASO UMA FUNCAO ESPECIFICA PARA ERROS

function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabao',
    preco: -1,
    validaProduto() {
        if(this.nome.trim().length == 0) {
            falha('Precisa de um nome')
        }
        if(this.preco <= 0) {
            falha('Preco invalido')
        }
    }
}

produto.validaProduto()