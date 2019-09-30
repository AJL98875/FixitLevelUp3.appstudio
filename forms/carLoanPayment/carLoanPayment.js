
function carLoanPayment(principalCar,interestCar,periodsCar) {
  let answer = principalCar * (interestCar*(Math.pow(1+interestCar,periodsCar)) / (Math.pow(1+interestCar,periodsCar) -1 ))
  return answer
}





