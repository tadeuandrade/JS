/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/


verificatriangulo = (n1, n2, n3) => {}
    if(n1 === n2 && n2 ===n3){
        console.log('Equilátero')
    } else if(n1 === n2 || n1 === n3 || n2 === n3){
        console.log(`Isosceles`)
    }else {
        console.log(`Escaleno`)
    }
}

verificatriangulo(2,2,2)
verificatriangulo(2,1,1)
verificatriangulo(2,3,1)




