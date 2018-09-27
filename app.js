var express=require('express');
var app=express();

app.get('/', function(request, response) {
    response.sendFile(__dirname+'/index.html');
});

var port = process.env.port || 3500;
var server = app.listen(port, function(req,res){
    console.log("Catch the action at https://localhost:"+port);
}
);