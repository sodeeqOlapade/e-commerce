let counter = -1;

function generateId() {
  counter === -1 ? (counter = 0) : (counter = ++counter);
  return counter;
}

module.exports = generateId;
