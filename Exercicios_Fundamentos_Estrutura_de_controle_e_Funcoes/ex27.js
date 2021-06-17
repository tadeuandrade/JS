crescimento = (altura1, taxa1, altura2, taxa2) => {
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassa a criança 2 em 1 ano.'
        } else if (taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        } else {
            return 'As crianças tem igual altura e crescimento.'
        }

    } else {
        if (altura1 > altura2) {
            if (taxa1 >= taxa2) {
                return 'A criança menor não ultrapassará a maior.'
            } else {
                return tempo(altura2, taxa2, altura1, taxa1)
            }
        } else {
            if (taxa2 >= taxa1) {
                return 'A criança menor não ultrapassará a maior'
            } else {
                return tempo(altura1, taxa1, altura2, taxa2)
            }
        }

    }
}

tempo = (alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) => {
    let qtdanos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdanos++
    }
    console.log(qtdanos)
    return qtdanos
}

console.log(crescimento(150, 2, 130, 4))