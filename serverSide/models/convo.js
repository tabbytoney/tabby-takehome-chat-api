const mongoose = require('mongoose');

// Define what info we need from a single convo
const convoSchema = mongoose.Schema(
  {
    convoName: { type: String, trim: true },
    // using objectId for the id for a particular user/msg, etc
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    lastMsg: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Msg',
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

const Convo = mongoose.model('Convo', convoSchema);
module.exports = Convo;
