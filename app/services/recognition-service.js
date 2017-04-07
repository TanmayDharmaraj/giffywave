module.exports = function(secrets, Clarifai) {
    var app = new Clarifai.App(
        secrets.Clarify_Client_Id,
        secrets.Clarify_Client_Secret
    );

    function PredictFoodItems(base64Image, callback) {
        app.models.predict(Clarifai.FOOD_MODEL, {
            base64: base64Image
        }).then(
            function(response) {
                var result = [];
                var err = null;
                try {
                    var concepts = response.outputs[0].data.concepts;
                    for (var i = 0; i < concepts.length; i++) {
                        result.push(concepts[i].name);
                    }
                } catch (e) {
                    err = e;
                } finally {
                    callback(err, result);
                }

            },
            function(err) {
                callback(err);
            }
        );
    }

    return {
        PredictFoodItems: PredictFoodItems
    };
}(require('../secrets'), require('clarifai'));
