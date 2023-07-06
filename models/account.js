const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/dtk_nodejs_dev', {
    dbName: 'dtk_nodejs_dev',
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const AccountSchema = new mongoose.Schema({
    username: String,
    password: String,
    role: String
}, {
    timestamps: true,
    collection: 'account'
});
module.exports = mongoose.model('account', AccountSchema); 