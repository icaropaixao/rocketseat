// Manipulando arrays

let techs= ["html","css","Js"]

// adicionar um item no fim 
techs.push("node.js")

// adicionar no 
techs.unshift("Sql")

// remover do 
techs.pop()

// remover do começo
techs.shift()

// pegar somente alguns elementos do 
console.log(techs.slice(1, 3)) // posição do elemento no array

// remover 1 ou mais itens em qualquer posição do 
techs.splice(1, 1) // escolhendo a posição e num de elementos a tirar dps dele


// encontar a posição de um elemento no array
let index = techs.indexOf("html")

console.log(index)


