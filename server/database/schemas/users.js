import Mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'


 let UserSchema = new Mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, default: null },
    socialId: { type: String, default: null }, 
    admin: { type: Boolean, default: null }
});


const SALT_WORK_FACTOR = 10;

UserSchema.pre('save', (next) => {
    let user = this;

     

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
/*

UserSchema.methods.validatePassword = (password, callback) => {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};
*/
// Create a user model 

let userModel = Mongoose.model('user', UserSchema);

module.exports = userModel;