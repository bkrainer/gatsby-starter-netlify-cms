exports.handler = function(event, context, callback) {
		var thing = event.queryStringParameters.name;
    callback(null, {
    statusCode: 200,
    body: "Hello, "  thing
    });
}
