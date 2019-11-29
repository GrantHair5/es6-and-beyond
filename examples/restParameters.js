const theOldWay = (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z) => {
    console.log("the old way")
    console.log("a: ", a)
    console.log("b: ", b)
    console.log("c: ", c)
    console.log("d: ", d)
    console.log("And on and on")

    console.log("z: ", z)
    return;
}

//theOldWay("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")


const theRestParameterWay = (a, ...restOfAlphabet) => {
    console.log("theRestParameterWay")
    console.log("a:", a)
    restOfAlphabet.forEach(letter => {
        console.log(`${letter}: ${letter}`)
    })
}

//theRestParameterWay("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
