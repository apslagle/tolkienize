var mongoose = require('mongoose');

var EpicSchema = new mongoose.Schema({
  hero: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  }
})

var Epic = mongoose.model('Epic', EpicSchema);
module.exports = Epic;