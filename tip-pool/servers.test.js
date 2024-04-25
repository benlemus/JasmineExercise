describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should update server table using updateServerTable()", function () {
    submitServerInfo();
    updateServerTable();

    let serverTbList = document.querySelectorAll("#serverTable tbody td");

    expect(serverTbList.length).toEqual(2);
    expect(serverTbList[0].innerText).toEqual("Alice");
    expect(serverTbList[1].innerText).toEqual("$0.00");
  });

  afterEach(function () {
    // teardown logic
    serverTbody.innerHTML = "";
    serverId = 0;
    allServers = {};
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
