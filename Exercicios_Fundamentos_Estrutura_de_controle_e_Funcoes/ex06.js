/**06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. 
 * Aprimeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segundaretornará 
 * o valor da aplicação sob o regime de juros compostos */


 juros = (c, j, t) => {
    simples = c  
    js = (j/100) * simples
        
     for (let i = 0; i < t; i++) {
         simples += js
     }
     console.log(`Juros simples`, simples)


     compostos = c 
     jc = (j/100) * compostos
     for (let i = 0; i < t; i++) {        
        compostos+=jc
        jc = (j/100) * compostos  
     }
     console.log(`Juros compostos`, compostos)
     
 }
 juros(1000,10,10)


 /**
  * Correcao
  */

 jurosSimples = (capitalInicial, taxa, tempo) => capitalInicial + (capitalInicial * (taxa/100) * tempo)

 jurosCompostos = (capitalInicial, taxa, tempo) => capitalInicial * (1 + (taxa/100)) ** tempo

console.log(jurosSimples(100, 10, 2));
console.log(jurosCompostos(100, 10, 2));