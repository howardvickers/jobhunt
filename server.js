var fs = require('fs')
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var user = {}

app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.sendFile('./index.html', {root: './public'})
})


app.listen(80)