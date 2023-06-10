function calculateTotalPrice(groceries) {
  let totalPrice = 0;
  for (let i = 0; i < groceries.length; i++) {
    totalPrice += groceries[i].quantity * groceries[i].price;
  }
  return totalPrice;
}

const groceries = [
  {
    "product": "Milk",
    "quantity": 1,
    "price": 1.50
  },
  {
    "product": "Bread",
    "quantity": 2,
    "price": 2.00
  },
  {
    "product": "Eggs",
    "quantity": 12,
    "price": 0.25
  }
];

console.log(calculateTotalPrice(groceries)); // Output: 8.50