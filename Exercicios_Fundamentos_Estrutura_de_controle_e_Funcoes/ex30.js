verificainteiro = (vet) => {
    let maior
    let menor

    for (let i = 0; i < vet.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vet[i]
            menor = vet[i]
        } else {
            if (vet[i] > maior) {
                maior = vet[i]
            }
            if (vet[i] < menor) {
                menor = vet[i]
            }


        }
    }
    console.log(`Maior é ${maior}, Menor é ${menor}`)
}
verificainteiro([1005, 40, 50, 90, 150])