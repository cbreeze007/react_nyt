var express = require("express");
var mongojs = require("mongojs");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");


// Initialize Express
var app = express();

// Database configuration
var databaseUrl = "nytreact";
var collections = ["article"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log("Database Error:", error);
});

//var result = [];
request("https://www.nytimes.com/", function(error, response, html) {
  var $ = cheerio.load(html);
  var results = [];
  var metadata = {};
  $('a').each(function(i, element){
    // Save the text of the element (this) in a "title" variable

      //result.title = $(this).children("a").text();
      //result.link = $(this).children("a").attr("href");
    var a = $(this);
    var title = a.text();
    var img = a.children('img').attr('src');
    var url = a.attr('href');
    // var url = a.parent('a').attr("href")
      // console.log('URL = ' + url );
      // console.log('IMG = ' + img );
      console.log('title = ' + title );
      console.log('url = ' + url );
      //console.log('img = ' + img );
    metadata = {
     title: title,
     url: url
     //img:img
    };

           // Save the data in the article data into db
       if ((title !== '')) {  
        db.article.save({
          title: title,
          url: url
          //img: img
        }),


    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have
   // var link = $(element).children().attr("href");

    // Save these results in an object that we'll push into the result array we defined earlier
    // results.push({
    //   title: title
 
      results.push(metadata); 
      //console.log("hello " + metadata);
    };
      // console.log("hello " + results);
  });

  // Log the result once cheerio analyzes each of its selected elements
 
});


// Main route (simple Hello World Message)
app.get("/", function(req, res){
       if ((title !== '')) {  
db.article.find({}), function(err, data) {
    // Log any errors if the server encounters one
    if (err) {
      return console.log(err);
    }
    // Otherwise, send the result of this query to the browser
    else {
      //res.send("Hello Sebrina");
      res.json(data);
    } 
};
};
});



app.get("/all", function(req, res){
db.article.find({url: /.2017.*/}).sort({_id: -1}, function(err, data) {
    // Log any errors if the server encounters one
    if (err) {
      return console.log(err);
    }
    // Otherwise, send the result of this query to the browser
    else {
      //res.send("Hello Sebrina");
      res.json(data);
    }
});
});
// Listen on port 3000
app.listen(3004, function() {
  console.log("App running on port 3003!");
});