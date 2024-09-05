/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

//    Объявите интерфейс Loan, который определяет два свойства: principal и interestRate.
// Объявите интерфейс ConventionalLoan, который расширяет Loan и определяет дополнительное свойство, необходимое для обычного кредита, months.
// Обновите обе функции, чтобы реализовать новые интерфейсы, и строго типизируйте параметры.

/*  EXERCISE 1
    TODO: Declare the Loan interface. */
interface Loan {
    principle: number,
    interestRate: number,
}

/*  TODO: Declare the ConventionalLoan interface. */
interface ConventionalLoan extends Loan {
    months: number
}

const myLoan: Loan = {
    principle: 30000,
    interestRate: 5,
}

const myData: ConventionalLoan = {
    principle: 30000,
    interestRate: 5,
    months: 180
}


/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(loanTerms: Loan): string {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loanTerms.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(data: ConventionalLoan) {
    // Calculates the monthly payment of a conventional loan
    let interest = data.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = data.principle * interest / (1 - (Math.pow(1 / (1 + interest), data.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment(myLoan);
let conventionalPayment = calculateConventionalLoanPayment(myData);

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 
