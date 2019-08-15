var express=require('express')
var app=express.Router()
var cors=require('cors')
var app=express()
var userRouter=require('./routes/userRouter')
var bodyParser = require('body-parser')
var morgan=require('morgan')
app.use(cors())
app.use(bodyParser.json())
app.use(morgan())
app.use('/',userRouter)
app.listen(3002)
console.log('server listetning at port 3002')
module.exports=app
