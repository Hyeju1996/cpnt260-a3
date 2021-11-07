const express = require('express') //module
const path = require('path')

const app = express() //invoke express

// static server
app.use(express.static('public'))

// api endpoints
app.get('/api/foods', function(req, res){
  res.send("List of found")
})

app.use("*", function(req, res){
  res.sendFile(path.join(__dirname, './public/404.html'))
})
// this is a variable
const PORT = 8888
app.listen(PORT,function(){ console.log(`Server is listening on port ${PORT}`) })

