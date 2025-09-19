import {Person} from './person.js';

export class Teacher extends Person {
    constructor(name, degree) {
        super(name)
        this.degree = degree
    }
    teach() {
        console.log("teach");
    }
}

const teacher = new Teacher("adsad", "adads");
console.log(teacher);