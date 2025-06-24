const mongoose = require('mongoose');

const projectAcademicianSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  academician: { type: mongoose.Schema.Types.ObjectId, ref: 'Academician', required: true },
  role: {
    tr: { type: String },
    en: { type: String }
  }
});

module.exports = mongoose.model('ProjectAcademician', projectAcademicianSchema); 