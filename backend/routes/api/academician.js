const express = require('express');
const router = express.Router();
const Academician = require('../../models/Academician');

// Tüm akademisyenleri listele
router.get('/', async (req, res) => {
  try {
    const academicians = await Academician.find().populate('department');
    res.json({ success: true, data: academicians });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Tek akademisyen detay
router.get('/:id', async (req, res) => {
  try {
    const academician = await Academician.findById(req.params.id).populate('department');
    if (!academician) return res.status(404).json({ success: false, message: 'Akademisyen bulunamadı' });
    res.json({ success: true, data: academician });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router; 