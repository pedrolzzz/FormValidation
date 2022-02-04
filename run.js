const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();

//Static Files
app.use(express.static('public'));


router.get('/',function(req,res){
    // res.sendFile(path.join(__dirname +'/html/index.html'));
    res.sendFile(path.resolve('C:/Users/T-Gamer/Documents/Form Validation/html/index.html') );
})


app.use('/',router);
app.listen(process.env.port || 3000);
console.log("Servidor Rodando");
