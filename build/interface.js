"use strict";
class Macbook {
    constructor() {
        this.name = "Macbook Pro 2021";
        this.isExpensive = true;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
class Asus {
    constructor() {
        this.name = "Asus ROG";
        this.isGaming = true;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
const mac = new Macbook();
mac.on();
console.log(mac.name);
mac.off();
console.log('---------------');
const asus = new Asus();
asus.on();
console.log(asus.name);
asus.off();
