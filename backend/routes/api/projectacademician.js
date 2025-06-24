const express = require('express');
const router = express.Router();
const ProjectAcademician = require('../../models/ProjectAcademician');

// Tüm proje-akademisyen ilişkilerini listele
router.get('/', async (req, res) => {
  try {
    const items = await ProjectAcademician.find().populate('project').populate('academician');
    res.json({ success: true, data: items });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Tek proje-akademisyen ilişkisi detay
router.get('/:id', async (req, res) => {
  try {
    const item = await ProjectAcademician.findById(req.params.id).populate('project').populate('academician');
    if (!item) return res.status(404).json({ success: false, message: 'Kayıt bulunamadı' });
    res.json({ success: true, data: item });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router; 