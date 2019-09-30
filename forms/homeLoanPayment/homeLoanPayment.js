function homeLoanPayment(principalHome,interestHome,periodsHome) {
  let answer = principalHome*((interestHome*((1+interestHome)**(periodsHome)))/(((1+interestHome)**(periodsHome)-1)))
  return answer
}


