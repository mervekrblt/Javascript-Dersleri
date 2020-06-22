const thisDay = new Date
console.log(thisDay)

console.log(thisDay.getFullYear(), (thisDay.getMonth() + 1)) // months are started by zero, important +1

// create a new date

const newDay = new Date('10/17/1994 12:20:00')
console.log(newDay)

// calculate age

const myBirthday = new Date('10/17/1994') // should use new Date

const age = (Date.now() - myBirthday.getTime())

console.log(age)

const ageDate = new Date(age)

console.log(ageDate.getUTCFullYear() - 1970) // very important unix time is based on 1970


// which day will correspond to mothers day at 2021

const mothersDay = new Date()
mothersDay.setHours(0,0,0,0)
mothersDay.setFullYear(2021) 
mothersDay.setDate(1)
mothersDay.setMonth(4) // may = 4

console.log(mothersDay.getDay())