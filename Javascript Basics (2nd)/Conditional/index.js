
const startDay = new Date (prompt('When did you start university?'));

const milisec = Date.now() - startDay.getTime() // difference between applied date and now in milisec

const getDate = new Date(milisec) 

const yearDifference = getDate.getUTCFullYear() - 1970 // find the year difference

console.log(yearDifference)

/*I mostly do something wrong about () when I write function. I always forget to write () at the end of functions*/

switch (true){
    case yearDifference<4 && yearDifference>0:
        alert('You are a university student');
    break;

    case yearDifference<=0 :
        alert('Invalid number');
    break

    default:
    alert('You should be graduated');
}