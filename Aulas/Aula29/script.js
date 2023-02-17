let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
for(let valor in valores){ //For simplificado
    console.log(valores[valor])
}
if(valores.indexOf(10) == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor está na posição ${valores.indexOf(7)}`) //indexOf vai procurar no vetor valores onde está o valor 7 (vai me retornar o índice que esse elemento se encontra)
}