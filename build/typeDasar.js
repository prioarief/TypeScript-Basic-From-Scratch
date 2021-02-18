"use strict";
// String
var my_name = "Prio";
// Number
var age = 18;
// Boolean
var isMarried = false;
// any = no spesific type
var heroes = "Iron Man";
heroes = 20;
// array
var array = [1, 2, 3];
// tuples
var biodata;
biodata = ["Tangerang", 18]; // no error
// biodata = ['Tangerang', true] //  error
// biodata = ['Tangerang', 20, 20] //  error, because biodata is not assignable to type '[string, number]'. Source has 3 element(s) but target allows only 2
// enum
// numeric enum
// enum month {
//     JAN = 1, // default value 0
//     FEB, // increment from prev value
//     MAR
// }
// string enum
var month;
(function (month) {
    month["JAN"] = "Januari";
    month["FEB"] = "Februari";
    month["MAR"] = "Maret";
})(month || (month = {}));
// union type
var phoneNumber = 6289283928;
console.log(phoneNumber);
phoneNumber = '0895494949';
console.log(phoneNumber);
