
function carLoanPayment(principal,interest,periods) {
  let answer = ((principal + interest) / periods)
  return answer
}

let loanPayment = carLoanPayment(20000,2000,36)
alert('Your Car loan payment is ' + Math.round(loanPayment) + ' a month') 

