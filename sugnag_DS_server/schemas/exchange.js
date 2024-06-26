const mongoose = require('mongoose');

const { Schema } = mongoose;

const exchangeSchema = new Schema({
  requester: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  requestedSubject: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: target
  },
  targetSubject: {
    type: Schema.Types.ObjectId,
    ref: 'Subject',
    required: false
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('Exchange', exchangeSchema);
