var _ = require('lodash');
var hs = require('hubspot');

exports.handler = function(event, context, callback) {
    console.log(hs);
		var thing = event.queryStringParameters.name;
    callback(null, {
    statusCode: 200,
    body: "Path: " + event.path
    });
}
