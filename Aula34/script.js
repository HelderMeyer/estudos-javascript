//RECURSIVIDADE

function fatorial(numero){
   if(numero == 1){
    return 1
   }else{
    return numero * fatorial(numero-1)
   }
}

console.log(fatorial(6))
console.log(fatorial(6) == 120 ? 'Verdade' : fatorial(6) == 5040 ? 'Verdade2' : 'Falso2')



/*
Forma recursiva

5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!

*/