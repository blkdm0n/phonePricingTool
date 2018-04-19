const taxRate = 9;
const phonePrice = 699.99;
const accessoryPrice = 59.00;
const spendingThreshold = 850.00;
const bankBalace = 25000;

function phoneShopper () {
  var preTaxSpend = phonePrice + accessoryPrice;
  var totalSpend = preTaxSpend + Number(getTaxes(preTaxSpend));
  var formattedPrice = formatPrice(totalSpend);
}

function getTaxes(preTaxSpend) {
  var taxes = preTaxSpend * (taxRate/100);
  return taxes.toFixed(2);
}

function formatPrice(price) {
  console.log(`$${price.toFixed(2)}`);
}

phoneShopper();
