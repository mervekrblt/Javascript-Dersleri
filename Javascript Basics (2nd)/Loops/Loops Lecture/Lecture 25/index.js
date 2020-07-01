for (let i = 10; i >0; i--) {
    console.log(i)
} 
// print 10 9 ... 1
// start with 10 and while i>0, keep to print 10,9,8...1


// Also there are more different kinds of loops such as while, do-while...
let result =1
for (let a=1; a<= 10; a++){
    if(a%2==0){
        result*=a
    }
}
console.log(result)
// for and condition
//multiplying even number between 1 and 10

//nested loop
let stars ='\n'  // should use let variable otherwise you can get error


for(let i=1; i<10; i++){

    for(let j=1; j<2; j++){
        stars+='* ';
    }
   stars +='\n'  // with this code, prints vertically otherwise horizontally
}

console.log(stars)
