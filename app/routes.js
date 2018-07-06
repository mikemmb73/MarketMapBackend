const express = require('express'),
    //routes and such
    router                  = express.Router(),
    userAPIController = require('./controllers/api/users.controller');


module.exports = router;

//API routes

router.get('/api', function(req,res))
