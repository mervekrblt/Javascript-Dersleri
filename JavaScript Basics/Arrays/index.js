const city = ['Ankara', 'Yozgat:)', 'Sheffield']

console.log(city.length)

city[city.length]='Lille'

const cars = ['BMW', 'Mercedes', 'Opel', 'Mazda']

console.log(cars.length)

const first = cars[0]
const last = cars[cars.length-1]

console.log(first + ' '+ last)

cars.push('Renault')

cars.unshift('Toyota')

cars.sort()

class Student{
    constructor(name, surname, birthday){
    this.name=name
    this.surname=surname
    this.birthday = birthday
    }
}

const merve = new Student('Merve', 'Karabulut', 1994)

console.log(merve)