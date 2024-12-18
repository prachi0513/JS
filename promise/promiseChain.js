// create
// payment
// ordersum
// updatewal
const cart = ["item1", "item2"];
const createOrder = (cart) => {
  return new Promise(function (resolve, reject) {
    if (cart.length !== 0) {
      let orderID = "1232";
      resolve(orderID);
    } else {
      reject(new Error("we do not get the ID"));
    }
  });
};

createOrder(cart)
  .then(function (orderId) {
    console.log("createOrder successful", orderId);
    return orderId;
  })
  .then(function (orderID) {
    return Payment(orderID);
  })
  .then(function () {
    return orderSum();
  })
  .catch(function (err) {
    console.log("logged", err);
  });

const Payment = (orderID) => {
  console.log("payment successful", orderID);
};

const orderSum = () => {
  console.log("orderSum successful");
};

const updatewallet = () => {
  console.log.log("updatewallet successful");
};
