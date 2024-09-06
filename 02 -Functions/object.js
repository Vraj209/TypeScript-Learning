"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Vraj",
    email: "vraj@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "vraj", isPaid: true, email: "v@v.com" };
createUser(newUser);
function createCourse() {
    return { name: "typescipt", price: 599 };
}
createCourse();
function createUs(user) {
    return { name: "", email: "", isActive: true };
}
createUs({ name: "", email: "", isActive: true });
var myUser = {
    _id: "123456",
    name: "v",
    email: 'v@v.com',
    isActive: true
};
myUser.email = "vraj@panchal.com";
