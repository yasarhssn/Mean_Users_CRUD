const mongoose = require('mongoose');


 mongoose.connect(process.env.MONGODB_URI,{
    //useMongoClient : true
    useNewUrlParser:true
 },function(error){
  {
     if(error)
     {
            console.log('error in connecting to mongo:' + error);
     }
     else
     {
            console.log('successfully connected to mongolab in mongoose.connect: not via mongoclient');
     }
 }
 });
// mongoose.connection.on('connected',()=>
// {
//     console.log('successfully coneected-mongodb-mlab');
// });


const MongoClient = require('mongodb').MongoClient;

//const uri = "mongodb+srv://haasirhssn:<password>@cluster0-qqh5c.mongodb.net/test?retryWrites=true&w=majority";
//const client = new MongoClient(process.env.MONGODB_URI,{ useNewUrlParser: true });
MongoClient.connect(process.env.MONGODB_URI,(err,db) => {
    if(err)
    {
        console.log('error-mlab::' + err);
    }
    else{
        console.log('mlab connected successfully::' + db);
        mydatabase = MongoClient.UserInternDB;
        
        
        //console.log(MongoClient.server_info()['version']);
    }
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
 // client.close();
});
// mongoose.connect(process.env.MONGODB_URI,(err)=>{

    
//     if(!err)
//     {
//         console.log('Mongodb is started working at:' + process.env.MONGODB_URI);
        
//     }
//     else
//     {
//         console.log('mongodb - Error in connection:' +JSON.stringify(err,undefined,2));
//     }
// });
