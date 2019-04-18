let counter = -1;

function generateOrderId() {
  counter === -1 ? (counter = 0) : (counter = ++counter);
  return counter;
}

module.exports = generateOrderId;
