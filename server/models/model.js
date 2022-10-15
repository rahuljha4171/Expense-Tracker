import mongoose from "mongoose";

// Category
const categoriesSchema = mongoose.Schema({
  type: { type: String, default: "Investment" },
  color: { type: String, default: "#FCBE44" },
});

const transactionSchema = mongoose.Schema({
  name: { type: String, default: "Anonymous" },
  type: { type: String, default: "Investment" },
  amount: { type: Number },
  date: { type: Date, default: Date.now },
});

var Categories = mongoose.model("Categories", categoriesSchema);
var Transaction = mongoose.model("Transaction", transactionSchema);

export default { Categories, Transaction };
