describe("helpers tests", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 10;
    submitPaymentInfo();
  });
  it("should sum all in sumPaymentTotal()", function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(10);

    billAmtInput.value = 150;
    tipAmtInput.value = 15;

    submitPaymentInfo();

    expect(sumPaymentTotal("tipAmt")).toEqual(25);
  });

  it("should calculate the tip percent with calculateTipPercent(billAmt, tipAmt)", function () {
    expect(calculateTipPercent(100, 10)).toEqual(10);
  });

  it("should make new TD element with appendTd()", function () {
    let newTr = document.createElement("tr");

    appendTd(newTr, "test");

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("test");
  });

  it("should make new button and append to tr with appendDeleteBtn(tr)", function () {
    let newTr = document.createElement("tr");

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual("X");
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    summaryTds[0].innerHTML = "";
    summaryTds[1].innerHTML = "";
    summaryTds[2].innerHTML = "";
    allPayments = {};
  });
});
