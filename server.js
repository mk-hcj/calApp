// server related
const { request } = require('express');
const express = require('express');
const app = express();
const port = 3000;

//npm body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname +'/index.html')
});


app.post('/', function(req, res){
    let user = req.body.yourName;
    let num1 = req.body.firstNum;
    let num2 = req.body.secNum;
    res.send(divider(user, num1, num2));
})

app.listen(port, function(){
    console.log("Server is now activated at port "+ port);
})

function divider(name, num1, num2){
    let numOne = Number(num1);
    let numTwo = Number(num2);
    let answer = numOne / numTwo;
    return `Hello ${name}! Your answer is ${answer}`;
};