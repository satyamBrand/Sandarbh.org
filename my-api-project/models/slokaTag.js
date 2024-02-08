const mongoose = require('mongoose');

const slokaTagSchema = new mongoose.Schema({
  sloka_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sloka', // Assuming you have a Sloka model
    required: true,
  },
  tag_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag', // Assuming you have a Tag model
    required: true,
  },
});

const SlokaTag = mongoose.model('SlokaTag', slokaTagSchema);

module.exports = SlokaTag;
