media = (vet) => {
    let soma = 0
    for (let i = 0; i < vet.length; i++) {
        soma = soma + vet[i]
    }
    console.log(`Media e ${soma / vet.length}`)
}

media([5, 5, 5, 5, 3])