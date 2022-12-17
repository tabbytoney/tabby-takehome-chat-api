const mongoose = require('mongoose');

// define what we need from a user
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    picture: {
      type: String,
      default: 'serverSide/dummyData/mario outline.png',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
model.exports = User;
