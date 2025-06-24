const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: {
    tr: { type: String, required: true },
    en: { type: String, required: true }
  },
  description: {
    tr: { type: String },
    en: { type: String }
  },
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty',
    required: true
  },
  img_path: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Department', departmentSchema); 