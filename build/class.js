"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
exports.User = User;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.read = true;
        _this.write = true;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write,
        };
    };
    return Admin;
}(User));
var Guest = /** @class */ (function (_super) {
    __extends(Guest, _super);
    function Guest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.read = true;
        _this.write = false;
        return _this;
    }
    Guest.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write,
        };
    };
    return Guest;
}(User));
// public = accessible in all classes / outside the class
// protected = can only be accessed from that class, and child classes
// private = can only accessed from that class
var student = new User("Prio");
console.log("----------------------------------");
var admin = new Admin("Prio Arief");
admin.setName("Arief");
var _a = admin.getRole(), read = _a.read, write = _a.write;
write && admin.setName("Granted");
read && console.log(admin.getName());
console.log("----------------------------------");
console.log("----------------------------------");
var guest = new Guest("Prio Arief");
guest.setName("Arief");
var _b = guest.getRole(), readGuest = _b.read, writeGuest = _b.write;
writeGuest && guest.setName("Granted");
readGuest && console.log(guest.getName());
console.log("----------------------------------");
