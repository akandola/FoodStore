const tinyreq = require("tinyreq");
const cheerio = require("cheero");

request("http://allrecipes.com/", function (err, body) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(body);
    }
});