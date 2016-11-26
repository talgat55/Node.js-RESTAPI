import  mongoose from 'mongoose'
let Schema = mongoose.Schema

// set up a mongoose model and pass it using module.exports
export  mongoose.model('User', new Schema({ 
    name: String, 
    password: String, 
    admin: Boolean 
}));