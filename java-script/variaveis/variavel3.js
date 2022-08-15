/*
 ESCOPO determina a visibilidade
 de alguma variável no JS
*/

// BLOCK STATEMENT

// tudo que está dentro da tag script é o escopo GLOBAl
console.log("> existe x antes do bloco?",x)


/*
 tudo que esta dentro das chaves
 é um escopo Local
*/
{
    let x= 0
    console.log(x)
}

console.log("> existe x depois do bloco?",x)