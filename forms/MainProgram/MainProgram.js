let loopOpening = prompt('To use the loan calculator please type yes, if you do not wish to use the calculator, please type in no')

while(loopOpening == 'yes'){

let greeting = prompt('Which calculator would you like to use, Home or Car loan?')

if (greeting == 'home') {

let principalHome = prompt('What is the principal?')
let interestHome = prompt('What is the interest? Please enter as a decimal')
let periodsHome = prompt('Is the period 180 months or 360 months?')

let homeMonthlyPayment = homeLoanPayment( principalHome, interestHome, periodsHome)

alert(`A home loan for ${principalHome} over ${periodsHome} months at ${interestHome} would have a monthly payment of ${homeMonthlyPayment} `) 


} 


else if (greeting == 'car') {
  
let principalCar = prompt('What is the principal?')
let interestCar = prompt('What is the interest? Please enter as a decimal')
let periodsCar = prompt('What are the periods in months?')
  
let carMonthlyPayment = carLoanPayment( principalCar, interestCar, periodsCar)

alert(`A car loan for ${principalCar} over ${periodsCar} months at ${interestCar} would have a monthly payment of ${carMonthlyPayment} `) 


}

}

