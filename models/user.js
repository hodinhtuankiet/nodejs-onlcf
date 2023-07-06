const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/dtk_nodejs_dev', {
    dbName: 'dtk_nodejs_dev',
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const UserSchema = new mongoose.Schema({
    username: String,
    email: String,
    numberphone: String,
    address: String,
    time: String,
    payment: String,

}, {
    timestamps: true,
    collection: 'user'
});
module.exports = mongoose.model('user', UserSchema); 