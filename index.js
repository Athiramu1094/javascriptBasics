let message1 = "hello"

let message = "you have three neww notifications"
console.log(message1 + "," + message)


let name = "athira"
let greeting = "hi my name is "
let myGreeting = greeting + name 
console.log(myGreeting)


const welcomeEl = document.getElementById('welcome-el')
let name1 = "athira"
let greeting1 = "welcome back "
welcomeEl.innerHTML = greeting1 + "," + name1




const myNumber = document.getElementById('number')
const saveEl = document.getElementById('save-el')
let number = 0
function count(){
    number = number + 1
    myNumber.innerHTML = number
}

function save(){
    const previousEntry = number  + "-"
    saveEl.innerHTML += previousEntry
    myNumber.innerHTML = 0
    number = 0
}

let firstname = "Athira "
let secondname = "mu"
let fullname = firstname + secondname
console.log(fullname)

let name2 = "Shravan"
let name3 = "Shankar"
let fullname1 = name2 + " " + name3
console.log(fullname1)

let name4 = "Linda"
let greeting2 = "Hi there"
function greetLinda(){
    console.log(greeting2 + "," + " " + name4 + "!" )
}
greetLinda()


let myPoints = 3
function add3Points(){
    myPoints = myPoints + 3
    console.log(myPoints)
}
function remove1point(){
    myPoints = myPoints - 1
    console.log(myPoints)
}
add3Points()
add3Points()
remove1point()
remove1point()
add3Points()

const myError = document.getElementById('error')
function errormessage(){
    myError.innerHTML = "something went wrong, please try again"
}



const result = document.getElementById('sum')
let num1 = 8
let num2 = 2

function add(){
        result.innerHTML = num1 + num2
}
function substract(){
        result.innerHTML = num1 - num2
}
function multiply(){
        result.innerHTML = num1 * num2
}
function divide(){
        result.innerHTML = num1 / num2
}



