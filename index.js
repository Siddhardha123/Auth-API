const express = require('express');
const dotenv = require('dotenv')
const app = express();
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
app.use('/api/user', authRoute);

dotenv.config()

// connect to db
db_url = process.env.DB_URL
mongoose.connect(db_url,()=>{
    console.log("connected to db")
})

// middleware

app.use(express.json());
//server
try{
    app.listen(3000, ()=>{
        console.log("server is up and running ")
    })
}catch(err){
    console.log(err)
}

