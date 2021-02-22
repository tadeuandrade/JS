/**04)​Crie uma função que irá receber dois valores, o dividendo e o divisor. 
 * A função deverá imprimir o resultadoe o resto da divisão destes dois valores */

 resultado = (n1,n2) =>{
    console.log((n1/n2).toFixed()) 
    console.log((n1%n2).toFixed())
 } 
  resultado(15,3)

/**
 * correcao
 * function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)
 */