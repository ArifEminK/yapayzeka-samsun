const express = require('express');
const router = express.Router();
const Project = require('../../models/Project');

// Tüm projeleri listele
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().populate('department');
    res.json({ success: true, data: projects });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Tek proje detay
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate('department');
    if (!project) return res.status(404).json({ success: false, message: 'Proje bulunamadı' });
    res.json({ success: true, data: project });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router; 