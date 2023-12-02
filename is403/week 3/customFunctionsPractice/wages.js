function calcPay(hoursWorked, hourlyRate, taxRate, fica) {
  let gross;
  let taxCalc;
  let ficaCalc;
  let takeHome;

  gross = hourlyRate * hoursWorked;
  taxCalc = gross * (taxRate / 100);
  ficaCalc = gross * (fica / 100);
  takeHome = gross - taxCalc - ficaCalc;

  return takeHome.toFixed(2);
}
