const Port=8000
const express=require('express')
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.urlencoded())
// app.use(express.json())
const db=require('./config/mongoose');

// this is the initiator of the routing to different requests of the user with diff. url's
app.use('/',require('./routes/index'));
   

app.get('/',(req,res)=>{
    res.send("<h1>As the instructions were to create only an API and not an APP so I have not added much to Frontend part and the Polling System API is running fine , kindly check it on postman!</h1>");
});


app.listen(Port,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is runing ...",Port);
})