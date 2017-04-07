// http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=chicken
module.exports = function(secrets, http) {
    var api_key = secrets.Gify_Api_Key;

    function GetRandomGif(tag, callback) {
        http.get({
            host: "api.giphy.com",
            path: "/v1/gifs/random?api_key=" + api_key + "&tag=" + tag
        }, function(response) {
            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() {
                // Data reception is done, do whatever with it!
                var parsed = JSON.parse(body);
                callback(null, parsed);
            });
        });
    }

    return {
        GetRandomGif: GetRandomGif
    };
}(require('../secrets'), require('http'));
