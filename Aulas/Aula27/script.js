let numeros = [8, 5, 1, 30, 27]
// A ordem dos comandos importa (Se eu colocar o sort primeiro e o push depois, ele vai colocar em ordem crescente e depois acrescentar o número do push no final
numeros[5] = 100
numeros.push(200) //Adicionar um elemento no final do array
// numeros.sort() //Vai pegar todos os elementos e colocar em ordem crescente

console.log(`O elemento na primeira posição do vetor é o número ${numeros[0]}`)
console.log(`Nosso vetor é o ${numeros}`)
console.log(`O seu vetor possui ${numeros.length} elementos!`) //Comprimento do meu vetor

for(let i = 0; i < numeros.length; i++){
    console.log(`O valor na posição ${i} é: ${numeros[i]}`)
}