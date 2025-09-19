const person = {
    name: "Roushan",
    lname: "Singh",
    walk: function() {
        console.log("Walk the walk, code the talk")
    },
    show: function() {
        console.log(this);
    }
}

console.log(person);

console.log(person['name']);
const targetMember = 'name'

let val = person[targetMember]
console.log(val)

const show = person.show.bind(person);
console.log(show);
show();

const square = function(x) {
    return x * x;
}

const arrowSquare = num => num * num;
console.log(square(5), arrowSquare(5));

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
];

const activeJobs = jobs.filter(job => job.isActive)
console.log(activeJobs);

const colors = ["red", "green", "blue"];
const colorList = colors.map(color => `<li> ${color} </li>`);
console.log(colorList)

// object destructuring
const address = {
    street: 'India Gate',
    city: 'Delhi',
    country: 'India'
};

const {city, country} = address;
const {city: aliasCity} = address;

console.log(city, country, aliasCity)


// spread operator
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log(combined);

const spreadCombined = [...first, "a", ...second, "b"];
const clone = [...first];

console.log(spreadCombined);
console.log(clone);

const fname = {name: "10x"}
const work = {job: "coder"}

const profile = {...fname, ...work};
console.log(profile);


// classes

class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log("Walk");
    } 
}

const person1 = new Person("Roushan");
const person2 = new Person("10x Coder");
console.log(person1);

// Inheritance

class Teacher extends Person {
    constructor(name, degree) {
        super(name)
        this.degree = degree
    }
    teach() {
        console.log("teach");
    }
}

const teacher = new Teacher("Mosh Hamedani", "online Tech");
console.log(teacher);