const express = require('express');
const app = express();

//set routes
app.use(require('./app/routes'));

app.listen(3000, function() {
    console.log('listening on 3000')
})
