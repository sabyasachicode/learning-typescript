interface user {
    name: string;
    age: number;
}

class student implements user {
    name: string = "Sabyasachi";
    age: number = 20;
    
}

type newSutdent = {
    newName: string
    newAge: number
}

class newSutdent1 implements newSutdent {
    newName: string = "newbajh";
    newAge: number = 20;
}