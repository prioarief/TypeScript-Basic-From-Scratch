"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name) {
        this.name = name;
    }
    setName(value) {
        this.name = value;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
class Admin extends User {
    constructor(phone) {
        super("Prio");
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    getAdminName() {
        // super is keyword to call method on parent class
        return super.getName();
    }
    setAdminName(val) {
        // super is keyword to call method on parent class
        return super.setName(val);
    }
    // setter
    set email(val) {
        this._email = val;
    }
    // getter
    get email() {
        return this._email;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    static isPrioHandsome() {
        return true;
    }
}
Admin.isHandsome = true; // static used to call properties or methods directly from the class itself, without having to initiate it (new)
// const admin = new Admin("Prio Arief Gunawan");
// admin.email = "hello.prioarief@gmail.com";
// console.log(admin.email);
// call static properti / method
const { isHandsome, isPrioHandsome } = Admin;
console.log(isHandsome);
console.log(isPrioHandsome());
