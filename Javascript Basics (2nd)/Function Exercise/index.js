class Person {
    constructor(name, accountNo, amount, additionalAmount) {
        this.name = name
        this.accountNo = accountNo
        this.amount = amount
        this.additionalAmount = additionalAmount
    }
    /*withdrawMoney(){
        console.log(this.accountNo, this.amount);
    }
    If I write this codeinside the Person class I should use this function like this merve.withdrawMoney*/
}
//merve.withdrawMoney()

function withdrawMoney(Person, money) {
    console.log(`Hello ${Person.name}, you have ${Person.amount} Turkish liras`);

    if (Person.amount >= money) {
        Person.amount = Person.amount - money
        console.log(`You can take your money`)
    } else {
        const second = Person.additionalAmount + Person.amount

        if (second >= money) {

              if (confirm('Do you wanna use your additional amount?')) {
                console.log('you can take your money')
            
            let amount = Person.amount
            let additionalAmount = money - amount
            Person.amount=0
            Person.additionalAmount = Person.additionalAmount - additionalAmount

            } else {
                ('You didnt want to use your additional amount')
            }
            }else{
                console.log('You dont have money')
            }
        }
    }

    merve = new Person('Merve', '1234', 2000, 1000)

    melis = new Person('Melis', '12345', 3000, 2000)

    withdrawMoney(merve, 2000)
    withdrawMoney(merve, 3000)