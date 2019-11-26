const mongoose = require('mongoose'),Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    id: 
    {
        type:String
    },
    username:
    {
        type:String
    },
    email: 
    {
        type:String        
    },
    address : 
    {
        street :
        {
             type : String
        },
        suite :
        {
             type : String
        },
        city :
        {
             type : String
        },
        zipcode :
        {
             type : String
        },
        geo :
        {
            lat :
            {
                 type  : String
            },
            lang :
            {
                type  :String
            }
        }
    },
    phone :
    {
        type  : String
    },
    website : 
    {
        type : String
    },
    company : 
    {
        name : 
        {
            type : String
        },
        catchPhrase :
        {
             type : String
        },
        bs :
        {
            type  : String
        }
    }
});

module.exports = mongoose.model('user',UserSchema);