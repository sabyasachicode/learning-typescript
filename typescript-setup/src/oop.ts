class user {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let u1 = new user("ahan", 20);
console.log(u1);
u1.age = 25;
console.log(u1)