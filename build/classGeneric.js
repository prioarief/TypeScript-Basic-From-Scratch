"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    getAll() {
        return this.data;
    }
    addData(data) {
        this.data.push(data);
    }
    addMultipleData(...data) {
        this.data.push(...data);
    }
}
// const numberList = new List<number>(1,2,3)
// numberList.addData(4)
// numberList.addMultipleData(5,6,7)
// console.log(numberList.getAll())
const stringList = new List("prio", "arief");
stringList.addData("gunawan");
stringList.addMultipleData("handsome", "cool");
console.log(stringList.getAll());
