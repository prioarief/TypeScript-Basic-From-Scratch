interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Macbook implements Laptop {
  name: string = "Macbook Pro 2021";
  isExpensive: boolean = true;
  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

class Asus implements Laptop {
  name: string = "Asus ROG";
  isGaming: boolean = true;
  on(): void {
    console.log("nyala");
  }
  off(): void {
    console.log("mati");
  }
}

const mac = new Macbook()
mac.on()
console.log(mac.name)
mac.off()
console.log('---------------')
const asus = new Asus()
asus.on()
console.log(asus.name)
asus.off()
