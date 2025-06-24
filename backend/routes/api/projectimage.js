const express = require('express');
const router = express.Router();
const ProjectImage = require('../../models/ProjectImage');

// Tüm proje görsellerini listele
router.get('/', async (req, res) => {
  try {
    const images = await ProjectImage.find().populate('project');
    res.json({ success: true, data: images });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Tek proje görseli detay
router.get('/:id', async (req, res) => {
  try {
    const image = await ProjectImage.findById(req.params.id).populate('project');
    if (!image) return res.status(404).json({ success: false, message: 'Görsel bulunamadı' });
    res.json({ success: true, data: image });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router; 