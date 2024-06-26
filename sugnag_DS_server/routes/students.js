const express = require('express');
const Student = require('../schemas/student');
const Subject = require('../schemas/subject');

const router = express.Router();

// 로그인 [GET] /students/login
router.get('/login', async(req,res)=>{
  const {studentNumber, password} = req.body;
  const student = Student.findOne({studentNumber:studentNumber});
  if(!student.password == password){
    return res.status(400).json({ error: '로그인 정보를 다시 확인해주세요.' });
  }
  res.status(200);
  console.log(studentNumber);
})

// [GET] /students/wishlist?studentNumber={studentNumber}
router.route('/wishlist')
.get(async(req,res,next)=>{
try{
    const studentNumber = req.query.studentNumber;
    const student = await Student.findOne({
      studentNumber: studentNumber
    });
    if(!student){
      return res.status(404).json({ error: 'Student not found' });
    }

    const whishSubject = await Subject.find({whish:true});
    const studentWishedSubjects = whishSubject.filter(
      subject=>{
        return student.subject.includes(subject._id)
      }); 
    res.status(200).json(studentWishedSubjects);
  }catch(err){
  console.error(error);
  res.status(400).json({ error: 'Not Found' });
  }
})
// [POST]  /students/wishlist/
.post(async (req, res, next) => {
  try {
    const { studentNumber, mileage } = req.body;
    const student = await Student.findOne({
      studentNumber: studentNumber
    });
    if(!student){
      return res.status(404).json({ error: 'Student not found' });
    }
    if (student.mileage < mileage) {
      return res.status(400).json({ error: '마일리지 부족' });
    }

    const wishedSubjects = await Subject.find({ registrationStatus: 'open', wish: true });
    
    student.wishedSubjects = [];
    wishedSubjects.forEach(subject => {
      student.wishedSubjects.push(subject._id);
    });
    student.mileage -= mileage;
    res.status(201).json({ message: '희망 과목 저장' });
    await student.save();

  }catch(err){

  }
})

// [GET] /students/subscription?studentNumber={studentNumber}
router.get('/subscription', async (req,res,next)=>{
  try {
    const studentNumber  = req.body.studentNumber;
    const student = await Student.findOne({
      studentNumber: studentNumber
    });
    if(!student){
      return res.status(404).json({ error: 'Student not found' });
    }
//..
  }catch(err){

  }
})

module.exports = router;


