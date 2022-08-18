// function scope

let subject = "create video"
function createThink(subject){ // esse subject é outra coisa, outro valor diferente do de cima
    subject = "study"
    return subject
}

console.log(createThink(subject))
console.log(subject)