// 3. App has messages

const mongoose = require('mongoose');

// Define what info we need from a msg
const msgSchema = mongoose.Schema(
  {
    // 4. Messages are associated with a user and a conversation
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
  // 5. Messages have a timestamp
  {
    timestamps: true,
  }
);

const Msg = mongoose.model('Msg', msgSchema);
module.exports = Msg;
