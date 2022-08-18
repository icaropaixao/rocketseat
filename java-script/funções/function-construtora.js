/*
  Function() constructor 

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function person(name){
    this.name= name    /* refere-se a variavel do lado de fora "icaro"
                       basicamente serve para criar objetos de forma mais "facil"*/
    this.walk = function(){
        return this.name + " está andando"
    }

}

const icaro = new person("icaro")
console.log(icaro.walk())
