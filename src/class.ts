export class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName(): string {
    return this.name;
  }
}

class Admin extends User {
  read: boolean = true;
  write: boolean = true;

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
}

class Guest extends User {
  read: boolean = true;
  write: boolean = false;

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
}

// public = accessible in all classes / outside the class
// protected = can only be accessed from that class, and child classes
// private = can only accessed from that class

const student = new User("Prio");
console.log("----------------------------------");
const admin = new Admin("Prio Arief");
admin.setName("Arief");
const { read, write } = admin.getRole();
write && admin.setName("Granted");
read && console.log(admin.getName());
console.log("----------------------------------");

console.log("----------------------------------");
const guest = new Guest("Prio Arief");
guest.setName("Arief");
const { read: readGuest, write: writeGuest } = guest.getRole();
writeGuest && guest.setName("Granted");
readGuest && console.log(guest.getName());
console.log("----------------------------------");
