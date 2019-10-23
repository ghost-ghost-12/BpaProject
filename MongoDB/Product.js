var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { Name: "Product Two", Picture: "http://mypics.com/allan.jpg", Price: "95.60", QTY: "500", Description: "Stuff" };
 
  dbo.collection("Product").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
