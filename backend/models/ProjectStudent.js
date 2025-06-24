const mongoose = require('mongoose');

const projectStudentSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  role: {
    tr: { type: String },
    en: { type: String }
  }
});

module.exports = mongoose.model('ProjectStudent', projectStudentSchema); 