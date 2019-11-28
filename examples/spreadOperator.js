const demoArray = () => {
    const myArrayOne = [
        {
            name: "Alice",
            age: 28
        },
        {
            name: "Bob",
            age: 23
        }
    ]

    const myArrayTwo = [
        {
            name: "Charles",
            age: 47
        },
        {
            name: "David",
            age: 64
        }
    ]

    const mySquashedArray = [...myArrayOne, ...myArrayTwo]
    console.log(JSON.stringify(mySquashedArray))
}

const demoObject = () => {
    const myObjectOne =
    {
        Id: 1,
        Price: 100

    }

    const myObjectTwo =
    {
        Id: 2,
        Price: 5000000
    }
    const myObjectThree =
    {
        Description: "This is an expensive item"
    }


    const mySquashedObject = { ...myObjectOne, ...myObjectTwo, ...myObjectThree }
    console.log(JSON.stringify(mySquashedObject))
}


const demoObjectWhoopsie = () => {
    const myObjectOne =
    {
        Id: 1,
        Price: 1

    }

    const myObjectTwo =
    {
        Id: 2,
        Price: 5000000
    }
    const myObjectThree =
    {
        Description: "This is an expensive item"
    }


    const mySquashedObject = {  ...myObjectTwo, ...myObjectOne,...myObjectThree }
    console.log(JSON.stringify(mySquashedObject))
}



const demoRealLife = () => {
    const myInitialObject = {
        name:"Bob", 
        jobTitle: "Software Engineer", 
        salary: 30000
    }
    
    console.log(JSON.stringify(myInitialObject))

    const objectAfterPromotion = {
        name:"Bob", 
        jobTitle: "JavaScript Ninja", 
        salary: 1000000
    }

    const theNewAndImprovedBob = {...myInitialObject, ...objectAfterPromotion}
    console.log(JSON.stringify(theNewAndImprovedBob))
}