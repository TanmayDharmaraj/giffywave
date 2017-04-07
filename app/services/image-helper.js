module.exports = function(fs) {
    var EncodeImage = function(path, callback) {
        var bitmap = fs.readFileSync(path);
        return callback(null, new Buffer(bitmap).toString('base64'));
    };

    return {
        EncodeImage: EncodeImage
    };
}(require('fs'));
