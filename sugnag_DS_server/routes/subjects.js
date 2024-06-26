const express = require('express');
const Student = require('../schemas/student');
const Subject = require('../schemas/subject');
const subject = require('../schemas/subject');

const router = express.Router();

// [GET] /subjects/:department
router.get('/:department', async(req,res,next)=>{
  try {
  const department = req.params.department;
  const subjects = await Subject.find({openDepartment: department})
  .select('classification openDepartment subjectCode syllabus subjectName credit professor lectureTime personnel');
  res.status(200).json(subjects)
  }catch (err){
    console.error(err);
    res.status(400).json({ error: 'Not Found' });
  }
})

// [GET] /subjects/past/:subjectCode
router.get('/past/:subjectCode',async(req,res,next)=>{
  try{
    const currentDate = new Date();
    const pastTrheeYears = currentDate.getFullYear()-3;
    const pastStartDate = new Date(pastTrheeYears, 0, 1);
    const pastEndDate = new Date(currentDate.getFullYear() - 1, 11, 31); 
    
    const subjectCode = req.params.subjectCode;
    const subject = await Subject.find({
      subjectCode: subjectCode,
      year: { $gte: pastStartDate.getFullYear(), $lte:pastEndDate.getFullYear()}
    });
    res.status(200).json(subject);
  }catch(err){
    console.error(err);
    res.status(400).json({ error: 'Not Found' });
  }
})


module.exports = router;