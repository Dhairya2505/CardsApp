const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://dhairyasingla250504:Singu%402505@cluster0.idbw1gx.mongodb.net/cardsApp");

const userSchema = new mongoose.Schema({
    gmail : String,
    username : String,
    password : String
})

const detailsSchema = new mongoose.Schema({
    id : String,
    name : String,
    email : String,
    gender : String,
    mobile : String,
    address : String,
    education : String,
    title1 : String,
    desc1 : String,
    link1 : String,
    title2 : String,
    desc2 : String,
    link2 : String
})

const User = mongoose.model('User',userSchema);
const Details = mongoose.model('Details',detailsSchema);

module.exports = {
    User,
    Details
};