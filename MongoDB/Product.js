var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { Name: "Product Two", Picture: "https://stockx-360.imgix.net/Air-Jordan-11-Retro-Win-Like-96/Images/Air-Jordan-11-Retro-Win-Like-96/Lv2/img01.jpg?auto=format,compress&w=559&q=90&dpr=2&updated_at=1538080256", Price: "95.60", QTY: "500", Description: "The Nike Jordans 11 is a good shoe for basketball and walking. A lot of people would love to see you in this shoe. With this low price too, nothing will be it!" ,
Category: "Shoes"};
 
  dbo.collection("Product").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
