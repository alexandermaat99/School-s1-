// Name: Alexander Maat
// Section 01

//collection of user information for BMI calculation, feet, inches, and pounds
let iFeet = parseInt(prompt("Enter your height in feet"));
let iInches = parseInt(prompt("Enter your height in inches"));
let iWeight = parseInt(prompt("Enter your current weight in pounds"));
let sCat = "";

//calculation of BMI
let iBmi = (iWeight / (iFeet * 12 + iInches) ** 2) * 703;
alert(iBmi);

//asign category based on BMI
if (iBmi < 18.5) {
  sCat = "You are underweight";
} else if (iBmi < 25) {
  sCat = "You are normal weight";
} else if (iBmi < 30) {
  sCat = "You are overweight";
} else {
  sCat = "You are obese";
}

//return assigned BMI category
alert(sCat);

//Display BMI and tips for better health if result is underweight, normal weigh, overweight, or obese
if (
  (sCat == "You are underweight") |
  (sCat == "You are normal weight") |
  (sCat == "You are overweight") |
  (sCat == "You are obese")
) {
  alert(
    "Tips for better heath: \n Maintian a Healthy Weight \n Increase Physical Activity \n Eat a Heart-Healthy Diet \n Know and Control Your Heart Health Numbers"
  );
}
