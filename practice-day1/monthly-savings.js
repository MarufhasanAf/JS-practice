function monthlySavings(payments, livCost) {
  if (!Array.isArray(payments) || typeof livCost != "number") {
    return "Invalid input";
  }

  let totalPayment = 0;
  for (let i = 0; i < payments.length; i++) {
    if (payments[i] >= 3000) {
      let payment = payments[i] - (payments[i] * 20) / 100;
      totalPayment += payment;
    } else {
      totalPayment += payments[i];
    }
  }
  if (totalPayment - livCost < 0) {
    return "Earn more";
  } else {
    return totalPayment - livCost;
  }
}
let result = monthlySavings([1000, 2000, 3000], 5400);
console.log(result);
