const mongoose = require('mongoose');

// Define what info we need from a msg
const msgSchema = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, trim: true },
    convo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Convo',
    },
    updatedAt: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Msg = mongoose.model('Msg', msgSchema);
module.exports = Msg;
