const mongoose = require('mongoose');
const users = mongoose.model('user');
const ObjectId = mongoose.Types.ObjectId;

module.exports.saveUserDetails = (req,res,next)=>
{
    console.log('Save User Details');

    console.log('SaveUserDetails:' + ' :: ' + req.body.username );
    //+ ' ' + req.body.address.street + ' ' + req.body.address.geo.lat + ' ' + req.body.company.name);

    var user = new users();
    user.id  = req.body.id;
    user.username = req.body.username;
    user.email = req.body.email;
    user.address.street = req.body.address.street;
    user.address.suite = req.body.address.suite;
    user.address.city = req.body.address.city;
    user.address.zipcode = req.body.address.zipcode;
    user.address.geo.lat = req.body.address.geo.lat;
    user.address.geo.lang = req.body.address.geo.lang;
    user.phone = req.body.phone;
    user.website = req.body.website;
    user.company.name = req.body.company.name;
    user.company.catchPhrase = req.body.company.catchPhrase;
    user.company.bs= req.body.company.bs;
    console.log("im one step behind user.save ->may be error here!");
        user.save((err,doc)=>
        {
            console.log('within user.save');
            if(!err)
            {
                console.log('successfully saved into database: response will be sent to angular');
                 res.send(doc);
            }
            else 
            {
                console.log('not successfully saved into database-error will be d respone');
                res.send(JSON.stringify(err,undefined,2));
                }
        });    

}

module.exports.getUsersDetails = (req,res) =>
{
    users.find({},(err,result)=>
    {
        if(!err) 
        {
            //console.log('All response:' + result);
            res.send(result);
        }
        else{
            //console.log('Error:' + err);
            res.send(err);
        }
    });
}

module.exports.updateUserById=(req,res,next)=>
{
    console.log('update User by id:' + req.params.id);
    console.log('update user by id:' + JSON.stringify(req.body,undefined,2));
    if(!ObjectId.isValid(req.params.id))
    //if(!req.body._id)
    {
        console.log('No id found:');
        return res.sendStatus(400);
        //.status("No record with given id:" + ' ' +  req.body._id);
    }
    else
    {

        console.log('Id found');

        users.findById({_id : req.body._id},(err,users)=>
        {
            if(!err)
            {
            users.id = req.body.id;
            users.username = req.body.username;
            users.email = req.body.email;
            users.address.street = req.body.address.street;
            users.address.suite = req.body.address.suite;
            users.address.city = req.body.address.city;
            users.address.zipcode = req.body.address.zipcode;
            users.address.geo.lat = req.body.address.geo.lat;
            users.address.geo.lang = req.body.address.geo.lang;
            users.phone = req.body.phone;
            users.website = req.body.website;
            users.company.name = req.body.company.name;
            users.company.catchPhrase = req.body.company.catchPhrase;
            users.company.bs = req.body.company.bs;
            
            users.save((err,docs)=>{
                if(!err)
                {
                    console.log('successfully updated');
                    res.send(docs);
                }
                else{
                    console.log('Id found and couldnt update');
                    res.send(err);
                }
            });
            }//if
            else
            {
                console.log('Id find & find user by couldnt update::' + err);
                return res.send(err);
                
            }        
        });//userFindById
    
    }
}

module.exports.getUserById = (req,res,next)=>
{
    if(!req.body._id)
    {
        return res.send(400).status("No user found with the given userid:" + req.body._id);
    }
    else
    {
        
        users.findOne({_id : req.body._id},(err,result)=>
        {
                if(!err)
                {
                    console.log('Found data for given id::' + result);
                        return res.send(result);
                }
                else{   
                    console.log('not even found data- but having id:' + req.body._id);
                    return res.send(err);
                }   
        }); 
    }
}

module.exports.deleteUserById =(req,res,next)=>
{
    console.log('im wihtin delete userby id' + req.params.id);
    if(!ObjectId.isValid(req.params.id))
    {
        console.log('No id found');
    }
    else
    {   
        console.log('im wihtin delete userby id -- id is present'); 
    users.remove({_id : req.params.id},(err,result)=>
    {
        
        if(!err)
        {
            console.log('successfully deleted:' + result);
            return res.send(result);
        }
        else
        {
            console.log('error in deletion');
            return res.send(err);
        }
    });
    }
}