function detectType(val: number | string) {
    // extra type gurd 
    if (typeof val == "string") {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide id");
        return   
    }
    id.toLowerCase()
}

interface User {
    name: string
    email:string
}

interface Admin{
    name: string
    email: string
    isAdmin:boolean
}

function isAdminAccount(account: User | Admin ) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
} 

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());    
    }
}

type Fish = { swim: () => void }
type Bird = { fly: () => void }

// type cast
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "Fish food"
    }
    else {
        pet
        return "Bird Food"
    }
}

interface Circle{
    kind: "circle"
    redius: number
}

interface Square{
    kind: "square"
    side:number
}

interface Rectangle{
    kind: "rectangle"
    length: number
    width: number
}
type Shape = Circle | Square | Rectangle

function getTrueShape(shape : Shape) {
    if (shape.kind == "circle") {
        return Math.PI * shape.redius ** 2
    }
    else {
        // return shape.side * shape.side
    }
}

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.redius ** 2
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width
        default:
            const _defaultShape: never = shape
            return _defaultShape
    }
}