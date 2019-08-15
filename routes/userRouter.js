var express = require('express');
var router = express.Router();
var usersBL=require('../public/javascripts/Users/usersBL')
/* GET users listing. */
router.post('/user', function(req, res, next) {
var obj=req.body
usersBL.postuser(obj).then(reso=>{
    if(reso){
        res.send('Data Inserted Successfully')
    }
}).catch(function (err) {
    next(err);
})
});
router.get('/user/:id', function(req, res, next) {
    var id=req.params.id
    usersBL.getuser(id).then(reso=>{
        if(reso){
            res.send(reso)
        }
    }).catch(function (err) {
        next(err);
    })
    });

module.exports = router;
