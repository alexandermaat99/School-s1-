alert("Test")

// Homework Average = 10%
// Midterm 1 Score = 20%
// Midterm 2 Score =20%
// Final Exam Score = 25%
// Project 1 Score = 5%
// Project 2 Score = 7.5%
// Project 3 Score = 12.5%

sName = prompt("What is your name?");

fHomeworkAvg = parseFloat(prompt("What is your homework average?"));
iMidterm1 = parseInt(prompt("What is your midterm 1 score?"));
imidterm2 = parseInt(prompt("What is your midterm 2 score?"));
iFinalExam = parseInt(prompt("What is your final exam score?"));
fProject1 = parseFloat(prompt("What is your project 1 score?"));
fProject2 = parseFloat(prompt("What is your project 2 score?"));
fProject3 = parseFloat(prompt("What is your project 3 score?"));

fFinalGrade = (fHomeworkAvg * .1) + (iMidterm1 * .2) + (imidterm2 * .2) + (iFinalExam * .25) + (fProject1 * .05) + (fProject2 * .075) + (fProject3 * .125);

alert(sName.toUpperCase() + " recieved a " + fFinalGrade.toFixed() + "% for the final grade.");