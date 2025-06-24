const express = require('express');
const router = express.Router();
const Faculty = require('../../models/Faculty');

// Tüm fakülteleri listele
router.get('/', async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.json({ success: true, data: faculties });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Fakülte oluştur
router.post('/', async (req, res) => {
  try {
    const faculty = new Faculty({ name: req.body.name });
    await faculty.save();
    res.status(201).json({ success: true, data: faculty });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Fakülte güncelle
router.put('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    if (!faculty) return res.status(404).json({ success: false, message: 'Fakülte bulunamadı' });
    res.json({ success: true, data: faculty });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Fakülte sil
router.delete('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndDelete(req.params.id);
    if (!faculty) return res.status(404).json({ success: false, message: 'Fakülte bulunamadı' });
    res.json({ success: true, message: 'Fakülte silindi' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router; 