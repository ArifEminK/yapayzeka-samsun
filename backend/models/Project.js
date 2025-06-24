const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    tr: { type: String, required: true },
    en: { type: String, required: true }
  },
  description: {
    tr: { type: String },
    en: { type: String }
  },
  startDate: { type: Date },
  endDate: { type: Date },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  // İlişkiler diğer tablolarda tutulacak (images, students, academicians)
});

module.exports = mongoose.model('Project', projectSchema); 