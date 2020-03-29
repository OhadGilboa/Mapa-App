//Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  id: Number,
  toUser: String,
  fromUser: String,
  date: Date,
  time: String,
  message: String
});
const Message = mongoose.model(`message`, messageSchema);

module.exports = Message;
