// call back function


// chamando uma função e depois chamando outra função
function sayMyName(name){
    console.log("antes de fazer a call back")

    name()// chamando a outra funçaõ

    console.log("depois de executar a call back")
}

sayMyName(
    ()=>{
        console.log("estou em uma call back")
    }
)