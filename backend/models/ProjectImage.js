const mongoose = require('mongoose');

const projectImageSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  url: { type: String, required: true },
  description: {
    tr: { type: String },
    en: { type: String }
  }
});

module.exports = mongoose.model('ProjectImage', projectImageSchema); 