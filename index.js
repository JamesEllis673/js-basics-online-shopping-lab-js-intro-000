var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1
 var add = {"itemName": item, "itemPrice": price}
 cart.push(add)
 return (item + " has been added to your cart.")
}

function viewCart() {
  if (cart.length === 0) {
    return ("Your shopping cart is empty.")
  }
  else {
    var string = "In your cart, you have "
    for (var i = 1; i <= cart.length; i++) {
      if (i === cart.length && cart.length > 1) {
        string = string + "and " + cart[i - 1].itemName + " at $" + cart[i - 1].itemPrice + "."
      }
      else {
        string = string + cart[i - 1].itemName + " at $" + cart[i - 1].itemPrice + ", "
      }
    }
  }
  return string
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
