const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , app =  express()
    , mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/simple-api-crud-nugraha', ()=>{
  console.log(`connect to mongodb database`);
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.listen(3000, ()=>{
  console.log(`Connect to port 3000`);
})