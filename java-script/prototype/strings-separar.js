// Manipulação Strings e Numeros 

/*
  Separe um texto que contem espaços, em um nov
  array onde cada texto é uma posição. depois disso
  transforme o array em um texto e onde eram espaços
  coloque (_)
*/

let phrase= "Eu quero viver o amor!"
let myArray= phrase.split(" ")
let phraseWithUnderscore= myArray.join("_") // unidade separadora
console.log(phraseWithUnderscore)