// generics : componant reusable : all function and even array is generics

const score: Array<number> = []
const names: Array<string> = []


function identityOne(val: boolean | number):boolean | number {
    return val;
}

// anything it will take and anything return here
function identityTwo(val: any): any{
    return val
}

// Here if i will take number as argumaent then it will remember and return type is also number
function identityThree<Type>(val: Type): Type{
    return val
}
identityThree(3)

// Short cut
function identityFour<T>(val: T): T{
    return val
}

interface Bottle{
    brand: string
    type:number
}

identityFour<Bottle>({ brand: "1", type: 2 })


// Array Functions
function getSearchProducts<T>(products:T[]): T{
    // database operations
    const myIndex = 3
    return products[myIndex]
}

// Arrary Arrow Functions : <T,> this generic not jsx syntax
const getMoreSearchProducts = <T,>(products:T[]):T => {
    // do some database operations
    const myIndex = 4
    return products[myIndex]
}