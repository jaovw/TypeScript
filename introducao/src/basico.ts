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