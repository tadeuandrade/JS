verificacaoDeString = (string, string2) => {
    let estacontido = true;
    for (let i = 0; i < string.length; i++) {
        let caracstring = string.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            let caracstring2 = string2.charAt(j).toLowerCase()
            if (caracstring == caracstring2) {
                estacontido = true
                break
            }else{
                estacontido = false
            }
        }
        if (!estacontido) {
            return estacontido            
        }
    }
    return estacontido
}

console.log(verificacaoDeString('abc','cba'))