const aws = require('aws-sdk');
const ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  if (!event.request.userAttributes.sub) {
    console.log("Error: No user was written to DynamoDB")
    context.done(null, event);
    return;
  }

  // Save the user to DynamoDB
  const date = new Date();

  const params = {
    Item: {
      'id': { S: event.request.userAttributes.sub },
      '__typename': { S: 'User' },
      //'username': { S: event.userName },
      'email': { S: event.request.userAttributes.email },
      'name': { S: event.request.userAttributes.name },
      'image': { S: event.request.userAttributes.picture },
      'createdAt': { S: date.toISOString() },
      'updatedAt': { S: date.toISOString() },
      'networth': { N: 100000.0 }
    },
    TableName: process.env.USERTABLE,
  }

  try {
    await ddb.putItem(params).promise();
    console.log("Success");
  } catch (e) {
    console.log("Error", e);
  }

  context.done(null, event);
}