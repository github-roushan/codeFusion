
const colors = ["red", "orange", "blue", 0]
colors.forEach(element => {
    console.log(element);
});


let trans_colors = colors.map(color => {
    switch (typeof color) {
        case "number": return "BLACK";
        case "string": return color.toUpperCase();
    }
});

console.log(trans_colors);