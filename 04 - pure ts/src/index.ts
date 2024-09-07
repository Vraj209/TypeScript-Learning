// class User {
//     public email: string
//     private name: string
//     // #name: string
//     readonly city:string = ""
//     constructor(email:string, name:string) {
//         this.email = email;
//         this.name = name;
//         this.city
//     }
// }

class User {
    private _courseCount = 1
    readonly city:string = ""
    constructor(
        public email: string,
        public name: string,
        // private userId: string
    ) {    
    }
    
    // only accessable within class    
    private deleteToken() {
        console.log("Token Deleted")
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }
    get courseCount(): number{
        return this._courseCount
    }
    // set courseCount(courseNum):void !!!! ERRORR
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should more than 1")
        }
        this._courseCount = courseNum
    }
}


const vraj = new User("v@gmail.com", "vraj")
