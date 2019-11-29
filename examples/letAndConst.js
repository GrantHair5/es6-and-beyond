var myGlobalVariable = "Hello World"

const whyUseLetAndConst = () => {
    console.log(myGlobalVariable)
}
// Hello World

const whyUseLetAndConst2 = () => {
    var myGlobalVariable = "Something Else"
    console.log(myGlobalVariable)
}

// Something Else

const whyUseLetAndConst3 = () => {
    console.log(myGlobalVariable)
    var myGlobalVariable = "Something Else"
}

// Undefined

const whyUseLetAndConst4 = () => {
    console.log(myGlobalVariable)
    const myGlobalVariable = "Something Else Constant"
}

/* letAndConst.js:23 Uncaught ReferenceError: Cannot access 'myGlobalVariable' before initialization
    at whyUseLetAndConst4 (letAndConst.js:23)
    at <anonymous>:1:1
*/


const letReassignment = () => {
    let myScopedVariable = "Hello"
    console.log(myScopedVariable)
    myScopedVariable = {message: "Hello World"}
    console.log(myScopedVariable.message)
}

/* 
Hello
Hello World
*/ 