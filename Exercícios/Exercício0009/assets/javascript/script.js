let carros = [
    {marca: 'Ferrari', ano: 2018},
    {marca: 'BMW', ano: 2010},
    {marca: 'Fusca', ano: 1940},
    {marca: 'Bugatti', ano: 1990},
    {marca: 'Gol', ano: 2030}
]

carros.sort((a, b) => a.ano - b.ano)
console.log(carros)