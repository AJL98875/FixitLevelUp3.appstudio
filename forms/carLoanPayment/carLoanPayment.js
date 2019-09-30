
function carLoanPayment(principal,interest,periods) {
  let answer = principal*((interest*((1+interest)**(periods)))/(((1+interest)**(periods)-1)))
  return answer
}

let principal = prompt('What is the principal?')
let interest = prompt('What is the interest?')
let periods = prompt('What are the periods in months?')

let loanPayment = carLoanPayment( principal, interest, periods)
alert('Your Car loan payment is ' + Math.round(loanPayment) + ' a month') 


