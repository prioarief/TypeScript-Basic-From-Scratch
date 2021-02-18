interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Macbook implements Laptop {
  name: string;
  isExpensive: boolean;

  constructor(name:string, isExpensive:boolean){
    this.name = name
    this.isExpensive = isExpensive
  }
  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;

  constructor(name:string, isGaming:boolean){
    this.name = name
    this.isGaming = isGaming
  }
  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

const mac = new Macbook("Macbook Pro 2021", true)
mac.on()
console.log(mac.name)
mac.off()
console.log('---------------')
const asus = new Asus("Asus ROG", true)
asus.on()
console.log(asus.name)
asus.off()
