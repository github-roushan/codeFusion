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

console.log(operands)4

// we can a new property on object
js.creator = "Brendan Eich";