//Include path package which delivers pages via express
var path = require('path');

//Routes: What page to deliver when delivering the routes

module.exports = function(app) {
    app.get ("/survey", function(req,res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });
    app.use(function(req,res){
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
    
}