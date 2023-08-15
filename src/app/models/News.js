const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const News = new Schema({
  title: { type:  String, maxLength: 255 },
  body: { type:  String, maxLength: 255 },
  image: { type:  String, maxLength: 255 },
  slug: { type: String, maxLength: 255}
}, {
  timestamps: true
});

module.exports = mongoose.model('News', News);