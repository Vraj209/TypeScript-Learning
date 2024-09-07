"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "";
    }
    // only accessable within class    
    deleteToken() {
        console.log("Token Deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // set courseCount(courseNum):void !!!! ERRORR
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should more than 1");
        }
        this._courseCount = courseNum;
    }
}
const vraj = new User("v@gmail.com", "vraj");
