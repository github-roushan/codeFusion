
type BoxOffice = {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
};

type Movie = {
    readonly title: string;
    originalTitle: string;
    director: string;
    releaseYear: number;
    boxOffice: BoxOffice;
};

const dune: Movie = {
    title: "Dune",
    originalTitle: "Dune",
    director: " Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327883,
        grossWorldwide: 400671789,
    },
};

const cats: Movie = {
    title: "Cats",
    originalTitle: "Cats",
    director: "Jon Favreau",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108327883,
        grossWorldwide: 400671789,
    },
};

function getProfit(movie: Movie): number {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
}

console.log(`Cats made a profit of $${getProfit(cats)}`);

// destructuring example
function getProfitDes({ boxOffice: { grossWorldwide, budget } }: Movie): number {
    return grossWorldwide - budget;
}

console.log(`Cats made a profit of $${getProfitDes(cats)}`);

// One Another way to destructure
const { grossWorldwide } = dune.boxOffice;
console.log(grossWorldwide);