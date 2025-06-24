const express = require('express');
const router = express.Router();
const Department = require('../../models/Department');

// Tüm departmanları listele
router.get('/', async (req, res) => {
  try {
    const departments = await Department.find().populate('faculty');
    res.json({ success: true, data: departments });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// Tek departman detay
router.get('/:id', async (req, res) => {
  try {
    const department = await Department.findById(req.params.id).populate('faculty');
    if (!department) return res.status(404).json({ success: false, message: 'Departman bulunamadı' });
    res.json({ success: true, data: department });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router; 