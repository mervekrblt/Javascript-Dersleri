// herbir objeyi ayrı ayrı tanımlamak yerine class yapısını kullandım
class Person{
    constructor(name, surname, age, gender, order, adress){
        this.name=name
        this.surname= surname
        this.age =age
        this.gender=gender
        this.order= order
        this.adres= adress
    }
}

const merve = new Person ('Merve', 'Karabulut', 25, 'female', 'pizza', 'blabla')

const order = '25'
const order2 = '50' 

console.log( 'my name is '+ merve.name +' '+ merve.surname + ' and I am '+ String(merve.age)+ ' years old')

const totalOrder = Number(order)+Number(order2)
console.log(totalOrder)

const newLocal = merve.name.length
console.log(newLocal)