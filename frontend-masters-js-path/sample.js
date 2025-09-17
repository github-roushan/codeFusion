let js = {
    name: "JavaScript",
    abbr: "JS",
    isAwesome: true
}

if (js.isAwesome) {
    let statement = "Hell Yeah";
    console.log(statement)
}

console.log(js)

firstName = "Roushan"
lastName = "Singh"
fullName = firstName + lastName
console.log(fullName)

// capitalize the strings
let a = "tic tac toe"
let aCapit = a.toLocaleUpperCase()
console.log(aCapit)

let synonyms = ["plethora", "array", "cornucopia"];
console.log(synonyms);

let lastItem = synonyms.pop();
console.log(lastItem)


const operands = [1,4];
//  ok
operands[1] = 2343;

// not ok
// operands = [1, 2343];

console.log(operands);

// we can a new property on object
js.creator = "Brendan Eich";

const dog = {
    name: "Ein",
    breed: "Corgi",
    speak: function() {
        console.log(this.name + ": " + "woof woof");
    }
}

dog.speak();

const spices = [
    {name: "Emma", nickname: "Baby"},
    {name: "Roushan", nickname: "procoder"}
]

console.log(spices[1].name)

function multiply(a, b) {
    return a*b;
}

multiply(2, 3);

const yell = function (saying) {
    return saying.toLocaleUpperCase();
}

console.log(yell("foo bar"))

var newVarible = "hello"