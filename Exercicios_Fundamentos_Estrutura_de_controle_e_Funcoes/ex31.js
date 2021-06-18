negativos = (vet) => {
    let countnegativos = 0

    for (let i = 0; i < vet.length; i++) {
        if (vet[i] < 0) {
            countnegativos++
        }
    }
    console.log(`${countnegativos} são negativos`)
}

negativos([1,2,-3,-4])