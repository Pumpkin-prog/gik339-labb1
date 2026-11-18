console.log("Javascript");

console.log("FÖRE BLOCKET");

{
    var myVar = "Jag skapades med var";
    let myLet = "Jag skapades med let";
    const myConst = "Jag skapades med const";

    console.log("INUTI BLOCKET");
    console.log(myVar);
    console.log(myLet);
    console.log(myConst);
}

console.log("EFTER BLOCKET");
console.log(myVar);
/*
var är inte block-scopad (vilket är att den är "fast" eller
bunden till ett block om jag förstår rätt) och kan användas 
utanför ett block.
let och const är block-scopade och existerar bara inom det
block där de deklarerades.

let kan ändras senare medan const behåller samma värde efter
att den skapats.

En console.log() före blocket kan inte nå variabler som ännu
inte deklarerats.

Inuti blocket kan använda alla variabler

Efter blocket fungerar fortfarande var, men let och const
kan inte längre nås eftersom de är block-scopade.
*/

/* 
jag la från början till det här, men det krockade med kod
i uppgift 4a så det är tillagt längre ner i annan console.log form :) 
-> const add = (num1, num2) => {
    return num1 + num2;
};
console.log(add(5, 3));
*/

/*
-Om add hade skapats med let istället för const hade funktionen
fortfarande fungerat. Skillnaden är att variabeln senare hade
kunnat få ett nytt värde. Som att säga till koden "jag kommer inte byta ut det här värdet senare" liksom!

Samma funktion med en funktionsdeklaration:
function add(num1, num2) {
    return num1 + num2;
}

-Att en funktion returnerar något betyder att den skickar tillbaka
ett värde till den plats där funktionen anropades. I detta fall
returneras summan av num1 och num2.
*/
function add(num1, num2) {

    console.log(num1 == 0);
    console.log(num2 === "0");
    console.log(num2 == 0);
    console.log(num1 == NaN);

    console.log(num1 ? "truthy" : "falsy");

    if (
        num1 !== null &&
        num2 !== null &&
        num1 !== undefined &&
        num2 !== undefined &&
        typeof num1 === "number" &&
        typeof num2 === "number"
    ) {
        return num1 + num2;
    } else {
    return "Felaktig input";
}
}

console.log(add(5, 3));

/*
-Om add hade skapats med let istället för const hade
funktionen fortfarande fungerat. Skillnaden är att
variabeln senare hade kunnat få ett nytt värde.

Samma funktion med en funktionsdeklaration:

function add(num1, num2) {
    return num1 + num2;
}

-Att en funktion returnerar något betyder att den
skickar tillbaka ett värde till den plats där
funktionen anropades. I detta fall returneras
summan av num1 och num2.
*/
const num1 = 0;
let arg1;
let sum = false;

console.log(add(sum, 1));

sum = add("0", 3);
console.log(sum);

console.log(add(3, "num1"));

console.log(add(-5, num1));

console.log(add(arg1, 7));

console.log(add());

console.log("num1:", num1);
console.log("sum:", sum);

/*
- En parameter är ett namn som används i en funktionsdefinition för
att ta emot värden. I funktionen add(num1, num2) är num1 och num2
parametrar.

Ett argument är det faktiska värdet som skickas in när funktionen
anropas. I add(5, 3) är 5 och 3 argument.

En variabel är en behållare som lagrar ett värde. Exempel på
variabler i denna uppgift är num1, arg1 och sum.

- Det sista värdet som skrivs ut för num1 är 0.
Det är för att num1 har deklarerats med const och tilldelats
värdet 0. Ingen kod senare i programmet ändrar värdet. Eftersom
const används kan värdet inte heller tilldelas något nytt senare
i programmet (som sagt innan, Const är något vi inte vill ändra på:))

- Vid anropet add(-5, num1) skickas värdena -5 och 0 in i
funktionen. Parametern num1 får värdet -5 och parametern
num2 får värdet 0.

Först körs olika console.log-anrop som jämför värdena och
skriver ut resultat i konsolen.

Därefter utvärderas ternary-operatorn:

num1 ? "truthy" : "falsy"

Eftersom -5 är ett truthy-värde skrivs "truthy" ut.

Sedan kontrollerar if-satsen att inget värde är null eller
undefined och att båda parametrarna är av typen number.
Alla villkor blir sanna eftersom både -5 och 0 är giltiga
nummer.

If-satsen körs därför och funktionen returnerar:

-5 + 0

vilket ger resultatet -5.

Värdet skickas tillbaka till platsen där funktionen anropades
och skrivs ut i konsolen.
*/