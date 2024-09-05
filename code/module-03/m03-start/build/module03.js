"use strict";
/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
const myLoan = {
    principle: 30000,
    interestRate: 5,
};
const myData = {
    principle: 30000,
    interestRate: 5,
    months: 180
};
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms) {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(data) {
    // Calculates the monthly payment of a conventional loan
    let interest = data.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = data.principle * interest / (1 - (Math.pow(1 / (1 + interest), data.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
let interestOnlyPayment = calculateInterestOnlyLoanPayment(myLoan);
let conventionalPayment = calculateConventionalLoanPayment(myData);
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24" 
