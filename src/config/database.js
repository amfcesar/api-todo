const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise

//module.exports = mongoose.connect("mongodb://mongodb/todo");
//module.exports = mongoose.connect("mongodb://localhost/todo");
module.exports = mongoose.connect(process.env.MONGO_URL);