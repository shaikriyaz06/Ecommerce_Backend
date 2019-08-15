var MongoClient=require('mongodb')
var URL="mongodb://localhost:27017/ECOMMERCE_DB"
var connection={}
connection.getConnection=function(){
    return MongoClient.connect(URL).then(function(database){
        return database.db();
    }).catch(function(err){
        throw new Error("Could not connect to db")
    })
}
module.exports=connection;
