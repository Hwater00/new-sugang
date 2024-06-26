const mongoose = require('mongoose');

const {Schema} = mongoose;
const { Types: { ObjectId } } = Schema;

const stuentSchema = new Schema({
  name:{
    type: String,
    required: true,
    unique:false
  },
  department:{
    type: String,
    required: true,
    unique:false
  },
  studentNumber:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true,
  },
  mileage:{
    type: Number,
    required: true,
  },
  maxCredit:{
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  wishedSubjects: [{ type: ObjectId, ref: 'Subject' }], 
  registrationStatus: [{ type: ObjectId, ref: 'Subject' }],
});

module.exports = mongoose.model('Student', stuentSchema);