const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
})
  
app.listen(8080, function(error){
    if(error) throw error
    console.log("Server created Successfully on Port 8080")
})