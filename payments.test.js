describe("payments tests", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
  });

  it("should submit payment info with submitPaymentInfo() to allPayments", function () {
    submitPaymentInfo();

    expect(allPayments["payment1"].billAmt).toEqual("100");
    expect(allPayments["payment1"].tipAmt).toEqual("10");
    expect(allPayments["payment1"].tipPercent).toEqual(10);
  });

  it("should return bill undefined bill if less than 0 or empty with createCurPayment()", function () {
    billAmtInput.value = "";

    submitPaymentInfo();

    expect(createCurPayment()).toEqual(undefined);
  });

  it("should not make new payment with no input", function () {
    billAmtInput.value = "";

    submitPaymentInfo();

    // use object.keys to find length
    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it("should make new payment with createCurPayment()", function () {
    let diffPayment = {
      billAmt: "100",
      tipAmt: "10",
      tipPercent: 10,
    };

    expect(createCurPayment()).toEqual(diffPayment);
  });

  it("should update table using appendPaymentTable()", function () {
    let newPayment = createCurPayment();

    appendPaymentTable(newPayment);

    const tableTD = document.querySelectorAll("#paymentTable tbody td");

    expect(tableTD[0].innerText).toEqual("$100");
    expect(tableTD[1].innerText).toEqual("$10");
    expect(tableTD[2].innerText).toEqual("10%");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentTbody.innerHTML = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    serverTbody.innerHTML = "";
    paymentId = 0;
    allPayments = {};
  });
});
