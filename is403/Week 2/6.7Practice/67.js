// Homework Average = 10%
// Midterm 1 Score = 20%
// Midterm 2 Score =20%
// Final Exam Score = 25%
// Project 1 Score = 5%
// Project 2 Score = 7.5%
// Project 3 Score = 12.5%

// A is 94 and above
// A- is 90 to 93
// B+ is 87 to 89
// B is 83 to 86
// B- is 80 to 82
// C+ is 77 to 79
// C is 73 to 76
// C- is 70 to 72
// D+ is 67 to 69
// D is 63 to 66
// D- is 60 to 62
// Anything else is an E

var sName = prompt("What is your name?");

var fHomeworkAvg = parseFloat(prompt("What is your homework average?"));
var iMidterm1 = parseInt(prompt("What is your midterm 1 score?"));
var iMidterm2 = parseInt(prompt("What is your midterm 2 score?"));
var iFinalExam = parseInt(prompt("What is your final exam score?"));
var fProject1 = parseFloat(prompt("What is your project 1 score?"));
var fProject2 = parseFloat(prompt("What is your project 2 score?"));
var fProject3 = parseFloat(prompt("What is your project 3 score?"));

var fFinalGrade = (fHomeworkAvg * 0.1) + (iMidterm1 * 0.2) + (iMidterm2 * 0.2) + (iFinalExam * 0.25) + (fProject1 * 0.05) + (fProject2 * 0.075) + (fProject3 * 0.125);

var sLetterGrade = "";

if (fFinalGrade >= 94) {
    sLetterGrade = "A";
} else if (fFinalGrade >= 90) {
    sLetterGrade = "A-";
} else if (fFinalGrade >= 87) {
    sLetterGrade = "B+";
} else if (fFinalGrade >= 83) {
    sLetterGrade = "B";
} else if (fFinalGrade >= 80) {
    sLetterGrade = "B-";
} else if (fFinalGrade >= 77) {
    sLetterGrade = "C+";
} else if (fFinalGrade >= 73) {
    sLetterGrade = "C";
} else if (fFinalGrade >= 70) {
    sLetterGrade = "C-";
} else if (fFinalGrade >= 67) {
    sLetterGrade = "D+";
} else if (fFinalGrade >= 63) {
    sLetterGrade = "D";
} else if (fFinalGrade >= 60) {
    sLetterGrade = "D-";
} else {
    sLetterGrade = "E";
}

alert(sName.toUpperCase() + " recieved a " + fFinalGrade.toFixed() + "% for the final grade which is a(n) " + sLetterGrade + " in the course.");