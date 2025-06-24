const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: {
    tr: { type: String, required: true },
    en: { type: String, required: true }
  },
  description: {
    tr: { type: String },
    en: { type: String }
  }
});

module.exports = mongoose.model('Faculty', facultySchema); 