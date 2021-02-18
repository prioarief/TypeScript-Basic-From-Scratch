"use strict";
class Macbook {
    constructor(name, isExpensive) {
        this.name = name;
        this.isExpensive = isExpensive;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log("nyala");
    }
    off() {
        console.log("mati");
    }
}
const mac = new Macbook("Macbook Pro 2021", true);
mac.on();
console.log(mac.name);
mac.off();
console.log('---------------');
const asus = new Asus("Asus ROG", true);
asus.on();
console.log(asus.name);
asus.off();
