
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Rohit:mongodb@@7@cluster0-liiq2.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
module.exports=client;
