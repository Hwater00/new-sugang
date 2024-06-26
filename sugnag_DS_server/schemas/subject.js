const mongoose = require('mongoose');

const { Schema } = mongoose;
const subjectSchema = new Schema({
  classification: {
    type: String,
    enum: ['전공선택', '융합', '설계'],
    default: '전공선택',
    required: true,
  },
  openDepartment: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  syllabus: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
  },
  credit: {
    type: Number,
    required: true,
  },
  professor: {
    type: String,
    required: true,
  },
  lectureTime:{
    type: Array,
    required: true,
  },
  personnel: {
    type: Number,
    required: true,
  },
  engilshCheck: {
    type: Boolean,
    required: true,
  },
  maxMileage: {
    type: Number,
    required: true,
  },
  lectureDescription: {
    type: String,
    required: true,
  },
  exchangeStudentCheck: {
    type: Boolean,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  stuentCnt: {
    type: Number,
    required: true,
  },
  minMileage: {
    type: Number,
    required: true,
  },
  averageMileage: {
    type: Number,
    required: true,
  },
  registrationStatus:{
    type: Boolean,
    required: true,
    default: false,
  },
  subjectStatus:{
    type: String,
    required: true,
  },
  whish:{
    type: Boolean,
    required: true,
    default: false,
  }
})

module.exports = mongoose.model('Subject', subjectSchema);