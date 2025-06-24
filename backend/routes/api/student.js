const express = require('express');
const router = express.Router();
const Student = require('../../models/Student');

// Tüm öğrencileri listele
router.get('/', async (req, res) => {
  try {
    const students = await Student.find().populate('department');
    res.json({ success: true, data: students });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Tek öğrenci detay
router.get('/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate('department');
    if (!student) return res.status(404).json({ success: false, message: 'Öğrenci bulunamadı' });
    res.json({ success: true, data: student });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router; 