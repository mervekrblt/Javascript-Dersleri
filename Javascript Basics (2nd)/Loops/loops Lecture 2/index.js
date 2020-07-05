
// array
const cars = ['A', 'B', 'C']

for(let i in cars){
    console.log(cars[i])
}


//object
const people = [
    {firstName:'A'},
    {firstName:'B'},
    {firstName:'C'},
]

people.forEach(function(item){console.log(item)
})

const numbers =[1,2,3,4,5]

const squareNumbers = numbers.map(function(n){
    return n*n;
})

console.log(squareNumbers)