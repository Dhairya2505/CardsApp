const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://dhairyasingla250504:Singu%402505@cluster0.idbw1gx.mongodb.net/cardsApp");

const userSchema = new mongoose.Schema({
    gmail : String,
    username : String,
    password : String
})

const User = mongoose.model('User',userSchema);

module.exports = User;