// 1) What is the output?

const log = (value) => {
    if(typeof(value) === 'object')
        value = JSON.stringify(value)

    console.log(`${++log.numberOfTimesInvoked}: ${value}`)
}

log.numberOfTimesInvoked = 0

console.log("===== Section One =====")

// 1
log(1 === 1)

// 2
log("1" === 1)

// 3
log("1" == 1)

// 4
log([] === [])

// 5
log([] == [])

// 6
log({} == {})

// 7
log({} === {})

const o = { }

// 8
log(o === o)

function someFunction() { }

// 9
log(someFunction === someFunction())

someFunction.someProperty = someFunction

// 10
log(someFunction === someFunction.someProperty)
















console.log("===== Section Three ====="); log.numberOfTimesInvoked = 0

// 1
log(2 * 2 + 3)

// 2
log(2 * (2 + 3))

let n = 10

// 3
log(n++)

n = 10
// 4
log(n++ ? n : "Something")

var arrayOne = [ 1 ]
var arrayTwo = [ 2 ]

// 5
log((arrayOne === arrayTwo ? arrayOne[0] : arrayTwo)[0])


arrayOne[0] = arrayTwo[0]

// 6
log(arrayOne[0] === arrayTwo[0])

// 7
log((() => {return 20}))

const thing = (() => {return 20})

// 8
log(thing() === (() => {return 20})())


let foo = 50

function functioon(){
    foo++
    return foo
}

// 9
log(foo === functioon())

foo = 50

//10
log(foo === foo === foo)















console.log("===== Section Three ====="); log.numberOfTimesInvoked = 0

function doSomething(someValue) {
    someValue = someValue + 1
}

let x = 20
doSomething(x)
// 1
log(x)

let someValue = 0
doSomething(someValue)
// 
log(someValue)




let someObject = {
    someProperty : 30
}
doSomething(someObject)
log(someObject)