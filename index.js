// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

//Data 1
var Marksmass = 78
var Marksheight = 1.69
var BMIMarks = Marksmass / Marksheight ** 2
console.log(BMIMarks);

var Johnmass = 92
var Johnheight = 1.95
var BMIJohn = Johnmass / Johnheight ** 2
console.log(BMIJohn);
// data 2
// var Marksmass = 95
// var Marksheight = 1.88
// var BMIMarks = Marksmass / Marksheight ** 2
// console.log(BMIMarks);

// var Johnmass = 85
// var Johnheight = 1.76
// var BMIJohn = Johnmass / Johnheight ** 2
// console.log(BMIJohn);

//Challenges 2
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
markHigherBMI = BMIMarks > BMIJohn
if (markHigherBMI == true)
    console.log("Mark's BMI is higher than John's!");
else
    console.log("John's BMI is higher than Mark's!");

markHigherBMI = BMIMarks > BMIJohn
if (markHigherBMI == true)
    console.log("Mark's BMI (" + BMIMarks + ")" + "is higher than John's!" + "(" + BMIJohn + ")");
else
    console.log("Mark's BMI (" + BMIMarks + ")" + "is smaller than John's!" + "(" + BMIJohn + ")");

// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
//Data1 
function avgScore(score1, score2, score3) {
    let avg = (score1 + score2 + score3) / 3
    return avg;
}
// let dolphinAvg = Math.round(avgScore(96, 108, 89))
// let KoalasAvg = Math.round(avgScore(88, 91, 110))
// if (dolphinAvg > KoalasAvg && dolphinAvg >= 100) {
//     console.log("Dolphin's Win with Score (" + dolphinAvg + ") , KoalasAvg  only have score (" + KoalasAvg + ")");
// } else if (KoalasAvg > dolphinAvg && KoalasAvg >= 100) {
//     console.log("KoalasAvg Win with score   (" + KoalasAvg + ")  ,Dolphin's only have Score (" + dolphinAvg + ")");
// } else if (KoalasAvg === dolphinAvg && KoalasAvg >= 100 && dolphinAvg >= 100) {
//     console.log("Draw!");
// } else {
//     console.log("No one Win");
// }
//Data Bonus 2
// let dolphinAvg = Math.round(avgScore(97, 112, 101))
// let KoalasAvg = Math.round(avgScore(109, 95, 123))
// if (dolphinAvg > KoalasAvg && dolphinAvg >= 100) {
//     console.log("Dolphin's Win with Score (" + dolphinAvg + ") , KoalasAvg  only have score (" + KoalasAvg + ")");
// } else if (KoalasAvg > dolphinAvg && KoalasAvg >= 100) {
//     console.log("KoalasAvg Win with score   (" + KoalasAvg + ")  ,Dolphin's only have Score (" + dolphinAvg + ")");
// } else if (KoalasAvg === dolphinAvg && KoalasAvg >= 100 && dolphinAvg >= 100) {
//     console.log("Draw!");
// } else {
//     console.log("No one Win");
// }
//Data Bonus 3
let dolphinAvg = Math.round(avgScore(97, 112, 101))
let KoalasAvg = Math.round(avgScore(109, 95, 106))
if (dolphinAvg > KoalasAvg && dolphinAvg >= 100) {
    console.log("Dolphin's Win with Score (" + dolphinAvg + ") , KoalasAvg  only have score (" + KoalasAvg + ")");
} else if (KoalasAvg > dolphinAvg && KoalasAvg >= 100) {
    console.log("KoalasAvg Win with score   (" + KoalasAvg + ")  ,Dolphin's only have Score (" + dolphinAvg + ")");
} else if (KoalasAvg === dolphinAvg && KoalasAvg >= 100 && dolphinAvg >= 100) {
    console.log("Draw!");
} else {
    console.log("No one Win");
}