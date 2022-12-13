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

function christmasTree() {
    let maxLevel = document.getElementById("sizeOfTheTree").value;

    if (maxLevel < 2) {
        console.log("Podany rozmiar jest za mały");
        return;
    }
    else if (maxLevel > 100) {
        console.log("Podany rozmiar jest za duży");
        return;
    }

    console.log("---------Choinka---------")

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
}

function addition() {
    let a = parseInt(document.getElementById("addFirstNumber").value);
    let b = parseInt(document.getElementById("addSecondNumber").value);
    if (a && b) {
        document.getElementById("additionResult").innerHTML = a+b;
    }
    else {
        document.getElementById("additionResult").innerHTML = "There is no number";
        console.error("Nie została podana liczba");
        return;
    }
}

function subtraction() {
    let a = parseInt(document.getElementById("subFirstNumber").value);
    let b = parseInt(document.getElementById("subSecondNumber").value);
    if (a && b) {
        document.getElementById("subtractionResult").innerHTML = a-b;
    }
    else {
        document.getElementById("subtractionResult").innerHTML = "There is no number";
        console.error("Nie została podana liczba");
        return;
    }
}

function multiply() {
    let a = parseInt(document.getElementById("multiFirstNumber").value);
    let b = parseInt(document.getElementById("multiSecondNumber").value);
    if (a && b) {
        document.getElementById("multiplicationResult").innerHTML = a*b;
    }
    else {
        document.getElementById("multiplicationResult").innerHTML = "There is no number";
        console.error("Nie została podana liczba");
        return;
    }
}

function divide() {
    let a = parseInt(document.getElementById("divFirstNumber").value);
    let b = parseInt(document.getElementById("divSecondNumber").value);
    if (b == 0 ) {
        console.error("Nie dzielimy przez 0");
        document.getElementById("divisionResult").innerHTML = "Don't divide by 0";
        return;
    }
    if (a && b) {
        document.getElementById("divisionResult").innerHTML = a/b;
    }
    else {
        document.getElementById("divisionResult").innerHTML = "There is no number";
        console.error("Nie została podana liczba");
        return;
    }
}


// OBIEKTY

let person = {
        firstName: "Janusz",
        secondName: "Kowalski",

        

        getName: function (){
            console.log(this.firstName + " " + this.secondName)
        }
};

// Konstruktor
function personX (firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;

    this.getNameTest = function () {
        console.log(this.firstName + " " + this.secondName)
    };


};

person.getName();

let test = new personX("Adam", "Małysz");
test.getNameTest();

//Callback
function test3(a, callback) {
    console.log("test3: ", a);
    callback(a);
    // test4(a);
}

function test4 (arg) {
    console.log("test4 arg:", arg);
}

test3 (12, test4);

//Callback - wywolanie
function buttonClicked(event) {
    console.log("Przycisk kliknięty");
}

document.getElementById("button1").addEventListener("click", buttonClicked)