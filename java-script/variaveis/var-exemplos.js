

//declaration - declaração de variavel
var nome

//assigment or adiçaõ de valores na varialvel
nome="icaro"

// que tipo de dado foi colocado na variavel? 
console.log(typeof nome)

// agrupamento de variaveis
let age, IsHuman

age= 18
IsHuman= true

console.log(nome, age, IsHuman)

/*
escrita do texto = variaveis
e concatenação em variaveis
*/
console.log(" o "+ nome + " tem " + age + " anos." )


/*
interpolação em variavel com literals template
usa-se  ${} para concatenar a variavel e crase (`) em volta de tudo
*/
console.log(`O ${nome} tem ${age} anos`)
