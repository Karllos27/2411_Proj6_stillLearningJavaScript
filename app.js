// let i = 1;

// while(i < 5) {
//     console.log("Wartość i: " + i);
//     i++;
// }

// console.log("i---------------------------")
// for (let i = -2; i <= 2; i++){
//     if (i < 0) console.log(i + " jest ujemne");
//     else if (i > 0) console.log (i + " jest dodatnie");
//     else console.log (i + " to jest 0!!");
// }

// console.log("j---------------------------")

// let j = -2;

// while(j <= 2) {
//     if (j < 0) console.log(j + " jest ujemne");
//     else if (j > 0) console.log (j + " jest dodatnie");
//     else console.log (j + " to jest 0!!");
//     j++;
// }


console.log("---------Choinka---------")

let maxLevel = 3;
let currentLvl = 1;

while(currentLvl <= maxLevel){
    let spacesLvl = maxLevel-currentLvl;
    let level = "";
    while(spacesLvl > 0) {
        level += " ";
        spacesLvl--;
    }

    level += "*";
    for (let i = 1; i < currentLvl;i++) level += "**";

    console.log(level);

    currentLvl++;
}
