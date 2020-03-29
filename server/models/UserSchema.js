//Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: Number,
  firstName: String,
  lastName: String,
  LookingFor: String,
  age: Number,
  email: String,
  password: String,
  Status: String,
  interestedIn: Array,
  gender: String,
  picture: String,
  isCheckedIn: Boolean,
  isDeleted: Boolean,
  friends: Array,
  location: String
});
const User = mongoose.model(`user`, userSchema);

module.exports = User;
