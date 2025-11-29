
function twoFer(name: string = "you"): string {
    return `One for ${name}, one for me`;
}
console.log(twoFer());
console.log(twoFer("Roushan"));

function isLeapYear(year: number): boolean {
    if (year % 4 === 0) {
        if (year % 400 === 0) return true;
        if (year % 100 !== 0) return true;
    }
    return false;
}

console.log(isLeapYear(1998));
console.log(isLeapYear(2000));
console.log(isLeapYear(2100));