//Secrets contain sesitive data. Use the secrets-example.js file and create your own.
const secrets = require('./secrets');
const clarify = require('./services/recognition-service');
const giffy = require('./services/gif-service');
const image = require('./services/image-helper');

image.EncodeImage("./app/images/food-004.jpg", function(err, base64EncodedImage) {
    if(err){
      console.error(err);
      return;
    }
    clarify.PredictFoodItems(base64EncodedImage, function(err, resp) {
        if (err) {
            console.error(err);
            return;
        }
        var tag = resp[0];
        console.log("Getting gif for " + tag);
        giffy.GetRandomGif(resp[0], function(err, gif) {
            console.log(gif);
        });
    });
});
