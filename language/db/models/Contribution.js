const mongoose = require('mongoose');

const ContributionSchema = new mongoose.Schema({
  topic: String,
  language: String,
  code: String,
});

const Contribution = mongoose.model('Contribution', ContributionSchema);

module.exports = Contribution;
