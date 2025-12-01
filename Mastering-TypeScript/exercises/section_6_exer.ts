// Part 1
const ages: number[] = [18, 22, 19, 21, 25];

// Part 2
const gameBoard: string[][] = [];

// Part 3
type Product = {
    name: string;
    price: number;
};

const all_products: Product[] = [
    { name: "Coffee Mug", price: 11.5 },
    { name: "Choco Chips", price: 20 },
    { name: "Chips", price: 30.99 },
];

function getTotal(products: Product[]): number {
    return products.reduce((acc, product) => acc + product.price, 0);
}

console.log(getTotal(all_products));