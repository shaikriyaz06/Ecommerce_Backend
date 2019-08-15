var express=require('express')
var connection=require('../connections/connection')
var usersDAL=require('../Users/userDAL')
var usersBL={}
usersBL.postuser=(obj)=>{
return usersDAL.postuser(obj).then(res=>{
    if(res){
        return res
    }else{
        return null
    }
})}
usersBL.getuser=(id)=>{
    return usersDAL.getuser(id).then(res=>{
        if(res){
            return res
        }else{
            return null
        }
    })
}
module.exports=usersBL