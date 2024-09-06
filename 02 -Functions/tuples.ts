const User: (string | number)[] = [1, "Vraj"]

// Order are matter here
let tUser : [string, number, boolean]
tUser = ["vraj", 1, true]

// element are only 
let rgb:[number,number,number] = [255,255,255]
export { }

type User = [number, string,boolean]
const newuser: User = [112, "example@google.com", true]
newuser[1] = "vraj@google.com"