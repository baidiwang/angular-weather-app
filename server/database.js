const mongoose = require('mongoose');

function connectMongoDB() {
  mongoose.connect('mongodb+srv://baidiwang:baidiwang12345@cluster0.0mjpheu.mongodb.net/')
    .then(() => console.log('MongoDB Connected!'));
}

module.exports = {
  connectMongoDB
}
