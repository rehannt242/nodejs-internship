const express = require('express');
const app = express();
const path = require('path');
const cors=require('cors');
const corsOptions=require('./config/corsOptions');
const {logger}=require('./middleware/logEvents');
const errorHandler=require('./middleware/errorHandler');
const PORT= process.env.PORT || 3500;

//custom middleware logger
app.use(logger);
//corss orgin resourse sharing

    app.use(cors());
//built-in middleware to handle urlencoded data
//in other words form data
//'contenttype:application/x-www-form-urlencoded

app.use(express.urlencoded({extended:false}));


//built-in middleware for json
app.use(express.json());

//serve static files
app.use('/',express.static(path.join(__dirname,'/public')));
//route
app.use('/',require('./routes/root'));
app.use('/register',require('./routes/api/register'));
app.use('/auth',require('./routes/api/auth'));
app.use('/employees',require('./routes/api/employees'));


app.all('*',(req,res)=>{
    res.status(404);
    if(req.accepts('html')){

        res.sendFile(path.join(__dirname,'views','404.html'));
    }
    else if(req.accepts('html')){

        res.json({error:"404 Not Found"});
    }
    else{
        res.type('txt').send("404 Not Found");
    }
    
})

app.use(errorHandler)


app.listen(PORT,()=>console.log(`server running on port ${PORT}`));
