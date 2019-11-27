const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOLAB_URI || process.env.MONGODB_URI,(err)=>{
    if(!err)
    {
        console.log('Mongodb is started working at:' + process.env.PORT);
        
    }
    else
    {
        console.log('mongodb - Error in connection:' +JSON.stringify(err,undefined,2));
    }
});
