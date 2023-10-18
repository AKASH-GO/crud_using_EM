const express = require('express');
const dotenv = require(`dotenv`);
const app = express()

dotenv.config({path:`config.env`})
const PORT = process.env.PORT||8080

app.get('/',(req,res)=>{
    res.send('CRUD web application');
})
app.listen(PORT,()=>{console.log(`Server is listening on http://localhost:${PORT}`)});