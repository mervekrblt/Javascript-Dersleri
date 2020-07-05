// guessing number game
// create a random number which is between 1-10

let right = Number(prompt('how many times will you try'));  //should use let instead of const
let guessing, counter=0;   //should use let instead of const

const randomNum = Math.floor(Math.random()*10+1)

console.log(randomNum)

while(randomNum>0){
    counter++;
    right--;

    guessing = Number(prompt('Give me a number'))

    if(randomNum===guessing){
        console.log('Congratulations')
        console.log(`score : ${100-((100/right)*(counter-1))}`)
        break;
    }else if(randomNum>guessing){
        console.log('up')
    }else{
        console.log('down')
    }

    if(right ===0){
        console.log('game over')
    }

}