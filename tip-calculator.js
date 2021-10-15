const form = document.querySelector('form');

const calculateTotal = function(event) {
  // Stop the form from submitting
  event.preventDefault();

  // Assign form values
  const billTotal = Number(form.total.value);

  // 2a. Create `service` variable to accept value from select menu

  // 2b. Refactor `tipPercentage` and `tipRate` based on `service` using conditional statements (if/else/etc)
  // Bad service -> 12%/0.12
  // Adequate service -> 18%/0.18
  // Amazing service -> 23%/0.23

  const serviceLevel = form.rate.value;
  let tipPercentage = 0;
  if(serviceLevel === "poor") {
    tipPercentage = 12;
  }
  else if(serviceLevel === "adequate") {
    tipPercentage = 18;
  }
  else if(serviceLevel === "superb") {
    tipPercentage = 23;
  }
  else {
    alert("please enter service satisfaction");
  }
  
  //const tipPercentage = Number(form.rate.value);
  const tipRate = tipPercentage / 100;
  
  // Calculate tip and tax amounts
  const tipAmount = billTotal * tipRate;
  const paymentTotal = billTotal + tipAmount;
  
  // console.log(billTotal, tipPercentage, tipRate, paymentTotal);

  // Output results  
  form.payment.value = `Tip for $${billTotal} at ${tipPercentage}% tip for a total payment of $${paymentTotal.toFixed(2)}`;

}



form.addEventListener('submit', calculateTotal);