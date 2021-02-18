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
  phone: string;
  private _email: string = "";

  constructor(phone: string) {
    super("Prio");
    this.phone = phone;
  }

  getAdminName() {
    // super is keyword to call method on parent class
    return super.getName();
  }

  setAdminName(val: string) {
    // super is keyword to call method on parent class
    return super.setName(val);
  }

  // setter
  set email(val:string){
      this._email = val
  }

  // getter
  get email():string{
      return this._email
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }
}

const admin = new Admin("Prio Arief Gunawan");
admin.email = "hello.prioarief@gmail.com"
console.log(admin.email);
