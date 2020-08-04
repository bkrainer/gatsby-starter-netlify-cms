var colors = require('colors');
var hs = require('hs');

exports.handler = function(event, context, callback) {
    console.log(hs);
		var thing = event.queryStringParameters.name;
    callback(null, {
    statusCode: 200,
    body: "Path: " + event.path
    });
}
