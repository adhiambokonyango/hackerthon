var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res)=>{
    res.send("halo");
})

app.listen(3000, ()=>{
    console.log("server started on port: 3000")
});
