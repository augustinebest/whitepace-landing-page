
const name = "Jane Banks"; // string
const age = 40; // number
const isMarried = true; // boolean

const profile = {
  name: "John Doe",
  age: 40,
  isMarried: true,
};

let hobbies = null; // null

console.log("My name is first " + name);
console.log(`My name is second ${name}`);

hobbies = ["reading", "traveling", "cooking"]; // array



console.log("this is my hobbies " + hobbies + profile.age);
console.log(`${name} has ${hobbies.length} hobbies`);
console.log(`${name} likes ${hobbies[2]}`)

// string, number, boolean, object, null, undefined, array