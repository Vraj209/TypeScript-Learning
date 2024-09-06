const User = {
    name: "Vraj",
    email: "vraj@gmail.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){}
let newUser = {name: "vraj", isPaid:true , email:"v@v.com" }
createUser(newUser)

function createCourse(): {name:string, price:number}
{
    return {name:"typescipt",price:599}
}
createCourse()

// ------
type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUs(user:User): User{
    return{name:"",email:"",isActive:true}
}
createUs({name:"",email:"",isActive:true})


// -----
type User1 = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}

type cardNumber = {
    cardnumber: string;
}
type cvv = {
    cvv: string;
}
type cardDate = {
    cardDate: string;
}

type cardDetail = cardNumber & cardDate & cvv
let myUser: User1 = {
    _id : "123456",
    name: "v",
    email: 'v@v.com',
    isActive:true
}

myUser.email = "vraj@panchal.com"
// myUser._id = "vraj@panchal.com"

export {}