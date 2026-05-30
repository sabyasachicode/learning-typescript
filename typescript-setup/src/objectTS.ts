const user = {
  name: "Sabyasachi",
  age: 20,
};

//Object type declaration
let veggies: {
  name: string;
  quantity: number;
};

veggies = {
  name: "Cabbage",
  quantity: 2,
};

type dish = {
  name: string;
  price: number;
  ingredients: string[];
};

const maggie: dish = {
  name: "Maggie",
  price: 25,
  ingredients: ["water", "masala", "oil"],
};

function updateMaggie(update: Partial<dish>) {
  console.log("Updating ", update);
  return;
}

updateMaggie({ price: 30 });
updateMaggie({ ingredients: ["new masala"] });
updateMaggie({});

type recepie = {
  name?: string;
  price?: number;
};

function updateRecepie(update: Required<recepie>) {
  console.log(update);
}

updateRecepie({ name: "yipee", price: 30 });

type newSutdentUser = {
  name: string;
  age: number;
  password: string;
};

let user20: Pick<newSutdentUser, "name" | "age"> = {
  name: "shfjh",
  age: 20,
};

type newSutdentUserName = {
  name: string;
  age: number;
  secretPassword: string;
};

let user21: Omit<newSutdentUserName, "secretPassword"> = {
  name: "shfjh",
  age: 20,
};
