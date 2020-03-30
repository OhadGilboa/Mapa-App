const mongoose=require('../common/connection');
const schema=mongoose.Schema;

var userSchema= new schema({
    'userid': Number,
    'email': String,
    'first_name': String,
    'last_name': String,
    'pitch': String,
    'user_password': String,
    'user_status': String,
    'gender': String,
    'picture': String,
    'latitude': Number,
    'longtitude': Number,
    'mode': String,
    'usersInRange': []
});

var userModel= mongoose.model('users', userSchema);
module.exports=userModel;