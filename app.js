const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));
var hith = 1;
app.get("/", function(req, res){
     console.log("homePage hits = "+hith);
     hith++;
    res.sendFile(path.join(__dirname, '/public/', 'index.html'));
});
var hitd = 1;
app.get("/discover", function (req, res) {
    console.log("discoverPage hits = " + hitd);
    hitd++;
    res.sendFile(path.join(__dirname, '/public/', 'discover.html'));
});
var hitb = 1;
app.get("/browse", function (req, res) {
    console.log("browsePage hits = " + hitb);
    hitb++;
    res.sendFile(path.join(__dirname, '/public/', 'browse.html'));
});
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, '/public/src/', 'comingsoon.html'));
});
app.listen(3000, function(){
    console.log("Server listening on port 3000");
});