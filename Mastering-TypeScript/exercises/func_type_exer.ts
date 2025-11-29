
function twoFer(name: string = "you"): string {
    return `One for ${name}, one for me`;
}
console.log(twoFer());
console.log(twoFer("Roushan"));

function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(1998));
console.log(isLeapYear(2000));
console.log(isLeapYear(2100));