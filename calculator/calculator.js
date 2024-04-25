window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValues = { amount: 10000, years: 2, rate: 5 };

  const inputAmount = document.getElementById("loan-amount");
  const inputYears = document.getElementById("loan-years");
  const inputRate = document.getElementById("loan-rate");

  inputAmount.value = defaultValues.amount;
  inputYears.value = defaultValues.years;
  inputRate.value = defaultValues.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currentUIValues = getCurrentUIValues();
  console.log(currentUIValues);
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = values.rate / 100 / 12;
  const n = Math.floor(values.years * 12);

  // raise to power by using Math.pow
  // keep to 2 decimals by using .toFixed(x)
  const mP =
    (monthlyRate * values.amount) / (1 - Math.pow(1 + monthlyRate, -n));
  return mP.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentUI = document.getElementById("monthly-payment");

  monthlyPaymentUI.innerText = `$${monthly}`;
}
