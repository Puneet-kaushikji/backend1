const mongoose = require('mongoose');

// Correct the connection string
mongoose.connect('mongodb://127.0.0.1:27017/puneet')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String
});

module.exports = mongoose.model('User', userSchema);
