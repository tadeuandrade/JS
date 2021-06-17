verificaint = (vet) => {
    let countpar=0
    let countimpar=0

    for (let index = 0; index < vet.length; index++) {
        if (vet[index] % 2 == 0) {
            countpar++
        } else{
           countimpar++
        }

    }
    console.log(`${countpar} numeros pares e ${countimpar} numeros impares`)
}
verificaint([1,2,3,4]);