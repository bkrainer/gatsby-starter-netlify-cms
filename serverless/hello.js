var colors = require('colors');

exports.handler = function(event, context, callback) {
    console.log(colors);
		var thing = event.queryStringParameters.name;
    callback(null, {
    statusCode: 200,
    body: "Path: " + event.path
    });
}
