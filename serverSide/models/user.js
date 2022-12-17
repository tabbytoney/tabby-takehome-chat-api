const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// define what we need from a user
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    picture: {
      type: String,
      default: 'serverSide/dummyData/mario outline.png',
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.matchPass = async function (givenPass) {
  return await bcrypt.compare(givenPass, this.password);
};

// before saving,
userSchema.pre('save', async function (next) {
  // if password isnt modified, move on to the next step
  if (!this.isModified) {
    next();
  }

  // Using bcrypt on the password:
  // generate new password - A salt is a random string that makes the hash unpredictable
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);
module.exports = User;
