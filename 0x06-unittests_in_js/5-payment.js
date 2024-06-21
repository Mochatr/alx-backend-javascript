const Utils = require("./Utils");
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalPayment = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalPayment}`);
};

module.exports = sendPaymentRequestToApi;
