const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    tr: { type: String, required: true },
    en: { type: String, required: true }
  },
  email: { type: String, required: true, unique: true, trim: true },
  number: { type: String, required: true, unique: true, trim: true },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
  phone: { type: String, trim: true },
  bio: {
    tr: { type: String },
    en: { type: String }
  },
  image: { type: String, trim: true }
});

module.exports = mongoose.model('Student', studentSchema); 