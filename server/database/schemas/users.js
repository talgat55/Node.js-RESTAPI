import Mongoose from 'mongoose'



 let UserSchema = new Mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, default: null },
    socialId: { type: String, default: null }, 
    salt:     { type: String, default: null }, 
    admin:    { type: Boolean, default: null }
});
 
// Create a user model 

let userModel = Mongoose.model('user', UserSchema);

module.exports = userModel;