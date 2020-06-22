// I create Person class to create people
class Person{
    constructor(name, age, weight, height){
        this.name = name
        this.age = age
        this.weight = weight
        this.height= height
        this.bmi= []
    }
    calculate(weight, height){
        const a = (this.weight / (this.height*this.height))
        this.bmi.push(a)
    }
}

merve = new Person('Merve', 25, 58, 1.62)
merve.calculate(58, 1.62)

melis = new Person('Melis', 18, 65, 1.68)
melis.calculate(65, 1.68)

if (merve.bmi <= 18.4){
console.log('Merve is thin')
} else if(merve.bmi<24.9 || merve.bmi > 18.5){
console.log('Merve is normal')
}

if(merve.bmi !== melis.bmi){
console.log("Merve's ibm is different than Melis's ibm")
}