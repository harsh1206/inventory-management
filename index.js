const epxress = require('express');
const app = epxress();
const port = 8000;

// set up view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));


app.listen(port,function(err){
       
    if(err)
    {
        console.log('error in starting the server');
        return;
    }
     
    console.log(`server is running on port ${port}`);

});