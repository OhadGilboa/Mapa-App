const mongoose=require('mongoose');
const config=require('../common/config');
mongoose.connect(config.db_dev, {useNewUrlParser: true},()=>{

    console.log('successfully connected to the db...');
});

module.exports=mongoose;