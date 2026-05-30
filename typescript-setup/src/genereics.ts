function setUser<T>(item: T): T {
  return item;
}

console.log(setUser(40));

function getUser<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

console.log(getUser("generics", 20));
console.log(getUser(20, "generics"));
