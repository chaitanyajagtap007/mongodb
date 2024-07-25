var express = require("express");
var  mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

// Connection URL for mongodb

var url = 'mongodb://127.0.0.1:27017';
var client =new  mongoClient(url);
var conn=client.db("nodejs");


var app = express();

app.get("/",async function(req,res)
{
    // var data= await client.connect();
    // console.log(data);


    console.log(conn);
    
    var data = await conn.collection('student').find().toArray();



    
    // to add record in to the mongodb 
    // var data = await conn.collection('student').insertMany([{"name":"aniket","mobile":"854123856","email":"aniket@gmail.com"},{"name":"abhishek","mobile":"7845845195"}]);


    
    // to find perticular record 
    // var data = await conn.collection('student').find({"name":"aniket"}).toArray();


    console.log(data);
    res.send(data);
});

app.listen(2000);