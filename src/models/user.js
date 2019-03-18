const mongoose = require("mongoose");
const validator = require("validator");

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(enteredValue) {
      if (!validator.isEmail(enteredValue)) {
        throw new Error("Your email is like invalid and stuff");
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    validate(value) {
      if (validator.contains(value, "password")) {
        throw new Error("Your password cant be password, cmon!");
      }
    }
  },
  age: {
    type: Number,
    default: 0
  }
});

module.exports = User;
