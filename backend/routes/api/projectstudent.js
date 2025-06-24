const express = require('express');
const router = express.Router();
const ProjectStudent = require('../../models/ProjectStudent');

// Tüm proje-öğrenci ilişkilerini listele
router.get('/', async (req, res) => {
  try {
    const items = await ProjectStudent.find().populate('project').populate('student');
    res.json({ success: true, data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Tek proje-öğrenci ilişkisi detay
router.get('/:id', async (req, res) => {
  try {
    const item = await ProjectStudent.findById(req.params.id).populate('project').populate('student');
    if (!item) return res.status(404).json({ success: false, message: 'Kayıt bulunamadı' });
    res.json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router; 