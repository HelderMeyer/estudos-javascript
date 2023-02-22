let carros = [
    {marca: 'Ferrari', ano: 2018},
    {marca: 'BMW', ano: 2010},
    {marca: 'Fusca', ano: 1940},
    {marca: 'Bugatti', ano: 1990},
    {marca: 'Gol', ano: 2030}
]

carros.sort((a, b) => a.ano - b.ano)
console.log(carros)

/*let carrosGrandes = carros.filter((item) => {
    return item.marca.length > 4
})
console.log(carrosGrandes)*/

let ok = carros.every((item) => {
    return item.marca.length > 4
})

if(ok){
    console.log('Todos possuem mais de 4 caracteres!')
}else{
    console.log('Nem todos possuem mais de 4 caracteres!')
}

let ok2 = carros.some((item) => {
    return item.marca.length > 4
})

if(ok2){
    console.log('Alguns possuem mais de 4 caracteres!')
}else[
    console.log('Nenhuma marca possui mais de 4 caracteres!')
]