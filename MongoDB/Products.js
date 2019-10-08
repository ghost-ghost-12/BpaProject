var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Product One", Picture: "http://mypics.com/allan.jpg", Price: "2.00", QTY: "500", Description: "Stuff" };
 
  dbo.collection("Products").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
});
    var myobj = { name: "Product Two", Picture: "http://mypics.com/allan.jpg", Price: "5.00", QTY: "2000", Description: "CHazzed" };
 
    dbo.collection("Products").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
  });
});
