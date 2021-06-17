intervalo = (vet) => {
    let forainter = 0
    let dentrointer = 0
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] >= 10 && vet[i] <= 20) {
            dentrointer++
        } else {
            forainter++
        }
    }
    console.log(`${forainter} estao fora do intervalo e ${dentrointer} estao dentro do intervalo`)
}

intervalo([1,2,15,18,30,33,34])

fdsfd 

