var express=require('express')
var connection=require('../connections/connection')
var usersDAL={}
usersDAL.postuser=(obj)=>{
    // console.log('in DAL',obj.id)
return connection.getConnection().then((db)=>{
    var collection=db.collection('users')
   return  collection.insertOne({"id":obj.id,"name":obj.name,"email":obj.email,"password":obj.password}).then((res)=>{
        if(res){
            return res;
        }
    }).catch((err)=>{
        throw new Error('DB error')
    })

})
}
usersDAL.getuser=(id)=>{
    // console.log('in DAL',obj.id)
return connection.getConnection().then((db)=>{
    var collection=db.collection('users')
   return  collection.findOne({"id":id}).then((res)=>{
        if(res){
            return res;
        }
    }).catch((err)=>{
        throw new Error('DB error')
    })

})
}
module.exports=usersDAL