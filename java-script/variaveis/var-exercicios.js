// 1.Declare uma variavel de nome weight
   let weight

// 2. Que tipo de dado é a variavel acima?
   console.log(typeof weight)

/*
   3. Declare uma variavel e atribua valores para cada
   um dos dados:
        * name: string
        * age: number (integer)
        * stars: number (float)
        * iSubscibed: Boolean
*/
   let name= "icaro" //tipo string
   let age= 18 // tipo integer (numeros inteiros)
   let stars= 18.1 // tipo float (numeros decimais)
   let iSubscibed= true // tipo boolean (false ou true)


/*
  4. A variavel student abaixo é de que tipo de dados?

  4.1 Atribua a ela as mesmas propiedades e valores
  dp exercicio 3.

  4,2 Mostre no console a seguinte mensagem:

  <name> de idade <age> pesa e <wight> kg.
*/

let student={
    name: "icaro", 
    age: 18,
    weight: 70.1, 
    iSubscibed: true,
};

console.log(`${student.name} de ${student.age} anos pesa ${student.weight} Kg.`)


/*
  5. Declare uma variavel do tipo Array, de nome Students e atribua a ela
  nenhum valor, ouseja, somente o arrayz Vazio
*/
 let students=[]

 /*
  6. Reatribua valor ára a variavel acima, colocando
  dentro dela o objeto student da questao 4;(Nao copiar e colar o objeto,
  mas usar o objeto criado e inserir ele no Array)
*/

students=[
    student
]
console.log(students)

// 7. Coloque no console o valor 0 do arrayz acima

console.log(students[0])

// 8. Crie um novo student e coloque na posiçao 1 do array students
const john={
    name: "john", 
    age: 29,
    weight: 88.1, 
    iSubscibed: true,
}

students [1]= john
console.log(students)

