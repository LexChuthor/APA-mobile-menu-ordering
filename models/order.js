const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: { type: String, required: true },
  product: [{
    type: Schema.Types.ObjectId,
    ref: "Product"
  }],
  price: {type: Number, required: true},
  completed: {type: Boolean, default: false},
  date: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
