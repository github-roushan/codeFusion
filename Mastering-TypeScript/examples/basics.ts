let pi: number = 3.14159;
let univTruth: string = "Roushan is the best";

let gameOver: boolean = false;
console.log(Math.round(2.5));

// type inference
let x = 325;
let tvShow = "Friends";
let nothing = null;

const movies = ["Arrival", "Amadeus", "The Dark Knight"]
let foundMovie: string = "";

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}

console.log(typeof foundMovie);
console.log(foundMovie);