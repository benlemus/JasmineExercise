describe("monthly payment tests", function () {
  it("should calculate the monthly rate correctly", function () {
    // ...
    const values = {
      amount: 10000,
      years: 2,
      rate: 5,
    };
    expect(calculateMonthlyPayment(values)).toEqual("438.71");
  });

  it("should return a result with 2 decimal places", function () {
    // ..
    const values = {
      amount: 10000,
      years: 2,
      rate: 5,
    };
    expect(calculateMonthlyPayment(values)).toEqual("438.71");
    expect(calculateMonthlyPayment(values)).not.toEqual("438.710");
  });
});

describe("amount tests", function () {
  // ACCEPTS NEGATIVE, it should not
  it("should accect any input amount", function () {
    const values = {
      amount: -5,
      years: 2,
      rate: 5,
    };
    expect(calculateMonthlyPayment(values)).toEqual("-0.22");
  });
});

describe("years tests", function () {
  // ACCEPTS NEGATIVE, it should not
  it("should accect any input amount", function () {
    const values = {
      amount: 10000,
      years: -2,
      rate: 5,
    };
    expect(calculateMonthlyPayment(values)).toEqual("-397.05");
  });
});

describe("rate tests", function () {
  // ACCEPTS NEGATIVE, it should not
  it("should accect any input amount", function () {
    const values = {
      amount: 10000,
      years: 2,
      rate: -5,
    };
    expect(calculateMonthlyPayment(values)).toEqual("395.31");
  });
});
/// etc
