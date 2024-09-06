let score: number | string = 33
score = 45
score = "45"


type User = {
    name: string;
    id:number
}

type Admin = {
    username: string;
    id: number
}


let a1: User | Admin = {
    name: "Vraj",
    username: "vraj_209",
    id:123
}

function getDb(id: string | number) {
    console.log(`Db id is ${id}`)
}

getDb(3)
getDb("4")

// array
const data: number[] = [1,2,3,4]
const data2: string[] = ["1","2","3","4"]
const data3: (string | number | boolean)[] = ["1", "2", 3, 4, true]

// give fixed value they do not change in future
let pi: 3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew"
