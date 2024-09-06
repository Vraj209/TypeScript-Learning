function addTwo(num: number): number
{
    return num + 2
    // return "hello"
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean) { }

let loginUser = (name: string, email: string, isPaid: boolean = false) => { }

let myValue = addTwo(5)

loginUser("vraj",'v@gmail.com')
signUpUser("vraj",'v@gmail.com','123',true)
getUpper("nwdocnsaocnowaicnacn")


function getValue(value: number) : boolean {
    if (value > 5) {
        return true
    }
    return "200 OK"
}


const getHello = (s: string):string => {
    return "Vraj"
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, true, "ironman"]

heros.map((hero):string => {
    return `hero name is ${hero}`
})

function consoleError(errmsg: string):void{
    console.log(errmsg)
}

function handleError(errmsg: string):never{
    throw new Error(errmsg)
}