function homeLoanPayment(principalHome,interestHome,periodsHome) {
  let answer = principalHome * (interestHome*(Math.pow(1+interestHome,periodsHome)) / (Math.pow(1+interestHome,periodsHome) -1 ))
  return answer
}


