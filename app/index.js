//Secrets contain sesitive data. Use the secrets-example.js file and create your own.
const secrets = require('./secrets');
const clarify = require('./services/recognition-service');
const giffy = require('./services/gif-service');
const image = require('./services/image-helper');

console.log("Encoding image");
image.EncodeImage("./app/images/food-004.jpg", function(err, base64EncodedImage) {
    if(err){
      console.error(err);
      return;
    }
    console.log("Predicting food items");
    clarify.PredictFoodItems(base64EncodedImage, function(err, resp) {
        console.log("Finished predicting food items");
        if (err) {
            console.error(err);
            return;
        }
        var tag = resp[0];
        console.log("Getting gif for food item : " + tag);
        giffy.GetRandomGif(resp[0], function(err, gif) {
            console.log(gif);
        });
    });
});
