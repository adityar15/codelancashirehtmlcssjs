console.log("Hello World!")

var age = 10
let age2 = 30

let speed

const name = "Aditya"
const first_name= "Adi"
let fullName= name + " " + first_name

fullName = `${name}'s ${first_name}`
//name="Adi"
/*
age = 20
*/

let addition = 10 + 20

let sumOfAges = age + age2

let difference = age2 - age

let multiplication = age * age2

let division = age2/age

console.log(addition, sumOfAges, difference, multiplication, division)

let greaterThan = age >= age2
console.log(greaterThan)



let namesArray = ["Aditya", "Adi", "John"]

let person1 = {
    name: "Aditya",
    age: 28
}

let person2 = {
    name: "Adi",
    age: 28
}

let person3 = {
    name: "John",
    age: 30
}

let people = [person1, person2, person3]
console.log(people)


function additionOfNumbers(a,b=30){
    // let a = 10 
    // let b = 30

    let sum = a + b
    return sum
}

let additionValue = additionOfNumbers(-40,10)
console.log(additionValue)
console.log(additionOfNumbers(40,50))

let numbers = [10,20,30,40,50,60,70,80,90,100]

for(let i=0; i<numbers.length; i++)
{
    console.log(numbers[i])
}

console.log("loop finished")


let start = 0
while(start<numbers.length)
{
    console.log(numbers[start])
    start++
}