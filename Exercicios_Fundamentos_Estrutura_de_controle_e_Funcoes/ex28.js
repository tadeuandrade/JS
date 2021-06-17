verificaint = (vet) => {
    for (let index = 0; index < vet.length; index++) {
        if (vet[index] % 2 == 0) {
            console.log(`${vet[index]} é par`)
        } else{
            console.log(`${vet[index]} é impar`)
        }

    }
}
verificaint([1,2,3,4]);