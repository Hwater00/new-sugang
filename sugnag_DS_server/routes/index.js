const express = require('express');
const router = express.Router();
const Subject = require('../schemas/subject');

// test를 위해 DB에 정보를 넣는 개발자용 api
router.post('/', async (req, res, next) => {
  try {
    // 클라이언트로부터 받은 데이터를 MongoDB에 저장하기 위해 Subject 모델을 이용
    const newSubject = new Subject({
      classification: req.body.classification,
      openDepartment: req.body.openDepartment,
      subjectCode: req.body.subjectCode,
      syllabus: req.body.syllabus,
      subjectName: req.body.subjectName,
      credit: req.body.credit,
      professor: req.body.professor,
      lectureTime: req.body.lectureTime,
      personnel: req.body.personnel,
      engilshCheck: req.body.engilshCheck,
      maxMileage: req.body.maxMileage,
      lectureDescription: req.body.lectureDescription,
      exchangeStudentCheck: req.body.exchangeStudentCheck,
      year: req.body.year,
      stuentCnt: req.body.stuentCnt,
      minMileage: req.body.minMileage,
      averageMileage: req.body.averageMileage,
      registrationStatus: req.body.registrationStatus,
      subjectStatus: req.body.subjectStatus,
      wish: req.body.wish
    });

    // 새로운 과목 데이터를 MongoDB에 저장
    const savedSubject = await newSubject.save();

    // 클라이언트에 응답으로 저장된 과목 데이터를 보냄
    res.json(savedSubject);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

